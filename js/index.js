var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




const logo = document.querySelector('.logoheaderabout');
const logoWidth = logo.clientWidth;
const logoHeight = logo.clientHeight;

function moveLogo(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const maxX = window.innerWidth - logoWidth;
    const maxY = window.innerHeight - logoHeight;

    const newX = Math.min(maxX, Math.max(0, mouseX - logoWidth / 2));
    const newY = Math.min(maxY, Math.max(0, mouseY - logoHeight / 2));

    logo.style.transition = 'transform 0.5s ease-in-out';
    logo.style.transform = `translate(${newX}px, ${newY}px)`;
}

function returnLogo() {
    logo.style.transition = 'transform 2s ease-in-out';
    logo.style.transform = 'translate(-50%, -50%)';
}

document.addEventListener('mousemove', moveLogo);
document.addEventListener('mouseleave', returnLogo);