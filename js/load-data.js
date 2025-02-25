const urlParams = new URLSearchParams(window.location.search);
const guestID = urlParams.get('guest');
const deploymentID = `AKfycby4t0_4jrZ7KaQnFR5BLK7hcvqzSg_dbjrYwAc2FMmnZ09ONEOT_2zcl7zrvwj6J-lt`;
document.addEventListener("DOMContentLoaded", function() {
    const guestNameQuestion = document.getElementById('guest-name-input');
    const guestNameInfo = document.getElementById('guest-name-info');
    var guestName = null;
    fetch(`https://script.google.com/macros/s/${deploymentID}/exec?id=${guestID}`)
              .then(response => response.json())
              .then(data => {
                if (data.length > 0) {
                    const guest = data[0];
                    // document.getElementById("guest-id").textContent = guestID;
                    document.getElementById("guest-name").textContent = guest.name;
                    if (guest.attend === 'Không') {
                        document.getElementById("attend").selectedIndex = 1;
                        document.getElementById("attend").dispatchEvent(new Event('change'));
                    } else {
                        if (guest.days === "26") {
                            document.getElementById("attend-day").selectedIndex = 0;
                        } else if (guest.days === "27") {
                            document.getElementById("attend-day").selectedIndex = 1;
                        } else {
                            document.getElementById("attend-day").selectedIndex = 2;
                        }
                    }
                    guestNameQuestion.parentNode.removeChild(guestNameQuestion);
                } else {
                    console.log("Cannot find guest with ID:", guestID);
                    guestNameInfo.parentNode.removeChild(guestNameInfo);
                }
              })
              .catch(error => {
                  console.error('Error fetching data:', error);
                  guestNameInfo.parentNode.removeChild(guestNameInfo);
              });
    
    const attendSelect = document.getElementById('attend');
    const additionalQuestions = document.getElementById('additional-questions');
    
    attendSelect.addEventListener('change', function() {
        if (attendSelect.value === 'Không') {
          additionalQuestions.style.visibility = "hidden";
          
        } else {
          additionalQuestions.style.visibility = "visible";
        }
    });
    
});