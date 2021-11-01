const svg = document.querySelectorAll('.svg');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  svg.forEach( index => 
  index.classList.toggle('svg_hide'))
})