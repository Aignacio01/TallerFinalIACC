nav = document.querySelector('#nav');
menu = document.querySelector('#menu');

menu.addEventListener('click', function() {
    nav.classList.toggle('active');
    menu.classList.toggle('rotate');
});

