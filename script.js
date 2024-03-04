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