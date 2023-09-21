document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
    
});

ScrollReveal().reveal('.mostrar');
ScrollReveal().reveal('.columnas', { delay: 500 });
ScrollReveal().reveal('.banner-one', { delay: 500 });
ScrollReveal().reveal('.banner-two', { delay: 500 });