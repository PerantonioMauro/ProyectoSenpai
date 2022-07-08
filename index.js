const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector (".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');


open.addEventListener('click', () => {
    modal_container.classList.toggle('modal_container')
    
});

