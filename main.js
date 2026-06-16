const menuHamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");

menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("ativo");
    navMenu.classList.toggle("ativo");
});