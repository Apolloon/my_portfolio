$(document).ready(function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.nav-item');

    //State of the menu
    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            showMenu = false;
        }
    }
    // Work
    //const items = document.querySelectorAll('.item');
    $('div.descriptions').hide();

    $('.item').hover(function () {
        $(this).children('div.descriptions').slideToggle(500);
    });

});