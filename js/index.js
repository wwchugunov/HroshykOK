var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});




  function openModal() {
    // Открываем модальные окна
    $('#modal1').modal('show');
    $('#modal2').modal('show');
    // Можете добавить сколько угодно модальных окон по аналогии
  }
