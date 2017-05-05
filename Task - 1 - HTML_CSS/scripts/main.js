var openMenuButton = document.getElementsByClassName('open-menu')[0],
    menuWrapper = document.getElementsByClassName('menu-wrapper')[0];


openMenuButton.addEventListener('click', function() {
    menuWrapper.classList.toggle('active')
});