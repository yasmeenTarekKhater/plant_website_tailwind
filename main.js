// ------------- toggle button ----------------
const navMenu = document.querySelector('#nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const humburger = document.querySelector('#humburger');

humburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    humburger.classList.toggle('ri-close-large-fill');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]');
        humburger.classList.remove('ri-close-large-fill');
    });
});