var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




const logo = document.querySelector('.logoheaderabout');

function getRandomPosition() {
    const maxX = window.innerWidth - logo.clientWidth;
    const maxY = window.innerHeight - logo.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}

function moveLogo() {
    const newPosition = getRandomPosition();
    logo.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
}

logo.addEventListener('mouseover', moveLogo);

logo.addEventListener('transitionend', () => {
    // Возвращаем логотип в центр экрана после завершения анимации
    logo.style.transform = 'translate(-50%, -50%)';
});