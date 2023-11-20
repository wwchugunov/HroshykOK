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

    logo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

setInterval(flyLogo, 2000); // Change the interval as needed (milliseconds)