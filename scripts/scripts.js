const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const navMenu = document.querySelector('.nav-menu');

navOpen.addEventListener('click', () => {
    navMenu.classList.add('nav-opened');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav-opened');
});
