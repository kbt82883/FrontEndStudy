const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const toggleBtn = document.querySelector('.nav_toggleBtn');

toggleBtn.addEventListener('click', () => {
   menu.classList.toggle('active');
   icons.classList.toggle('active');
});