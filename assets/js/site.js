const menuTrigger = document.getElementById('menu-trigger');
const navMenu = document.getElementById('nav-menu');
const menuBarIcon = menuTrigger.querySelector('#menu-bars');
const menuCloseIcon = menuTrigger.querySelector('#menu-close');

menuTrigger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
  menuBarIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});

document.body.classList.remove('opacity-0');
