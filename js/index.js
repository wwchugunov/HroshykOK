var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




function flyLogo() {
  const logo = document.querySelector('.logoheaderabout');
  const maxX = window.innerWidth - logo.clientWidth;
  const maxY = window.innerHeight - logo.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  logo.style.transition = 'transform 2s ease-in-out';
  logo.style.transform = `translate(${randomX}px, ${randomY}px)`;

  setTimeout(() => {
      logo.style.transition = 'none'; // сброс transition после завершения анимации
  }, 2000);
}

setInterval(flyLogo, 4000); // Измените интервал по необходимости (в миллисекундах)