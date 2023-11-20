var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




function flyLogo() {
  const logo = document.querySelector('.logoheaderabout');
  const logoWidth = logo.clientWidth;
  const logoHeight = logo.clientHeight;

  const maxX = window.innerWidth - logoWidth;
  const maxY = window.innerHeight - logoHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Проверяем, чтобы логотип не выходил за границы дисплея
  const newX = Math.min(maxX, Math.max(0, randomX));
  const newY = Math.min(maxY, Math.max(0, randomY));

  logo.style.transform = `translate(${newX}px, ${newY}px)`;
}

setInterval(flyLogo, 2000); // Измените интервал по необходимости (в миллисекундах)