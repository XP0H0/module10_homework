const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  const widthScreen = window.screen.width;
  const heightScrern = window.screen.height;
  alert(`Размер вашего девайса ${widthScreen}x${heightScrern}`)
})