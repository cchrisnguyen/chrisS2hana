// preloader
const preloader = document.getElementById('preloader');

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        preloader.classList.add('uk-hidden');
    }, 500);
});
