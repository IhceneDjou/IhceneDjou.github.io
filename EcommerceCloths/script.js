$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.new .carousel .carousel-item').each(function(){
      var minPerSlide = 4;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
        document.getElementById('logo').style.display='flex';
      } else {
        $('.navbar').removeClass('scrolled');
        document.getElementById('logo').style.display='none';
      }
    });
  });

