$(function() {
  $('#dropdown-btn').on('click', function() {
    $('#dropdown-menu').slideToggle();
  });

  $('.mobLinks').on('click', 'li', function() {
    $('#dropdown-menu').slideUp();
  })
});