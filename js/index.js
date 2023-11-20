var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




const logo = document.querySelector('.logoheaderabout');

logo.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - logo.clientWidth;
    const maxY = window.innerHeight - logo.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    logo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

logo.addEventListener('transitionend', () => {
    // Возвращаем логотип в верхнюю часть экрана после завершения анимации
    logo.style.transform = 'translateX(-50%)';
});