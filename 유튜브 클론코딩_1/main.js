var clampBtn = document.querySelector('#clampBtn')
var title = document.querySelector('.title p')

clampBtn.addEventListener('click', () => {
  title.classList.toggle('clamp')
})