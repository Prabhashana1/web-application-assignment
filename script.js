$(document).ready(function() {
    var slides = $('.slideshow-container img');
    var currentSlide = 0;

    // Function to show next slide
    function showNextSlide() {
      slides.eq(currentSlide).fadeOut();
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).fadeIn();
    }

    // Set interval to automatically change slides
    var slideInterval = setInterval(showNextSlide, 3000);
  });


  $(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      // Check if the fields are not empty
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        $('.invalid-feedback').css('display', 'block');
        return;
      }

      // Check if the email is valid
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        $('#email').next('.invalid-feedback').css('display', 'block').text('Please enter a valid email address.');
        return;
      }

      // If all validations pass, submit the form
      this.submit();
    });
  });