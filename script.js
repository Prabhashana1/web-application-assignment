$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    //check all field are not empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      $('.invalid-feedback').hide();
      $('.invalid-feedback').first().show().text('Please fill out all fields.');
      return;
    }

    //check email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('.invalid-feedback').hide();
      $('#email').next('.invalid-feedback').show().text('Please enter a valid email address.');
      return;
    }

    this.submit();
  });
});