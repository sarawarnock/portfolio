$('.nav').on('click', '.nav-class', function(event) {
     event.preventDefault(); 

     $("body, html").animate(
         {scrollTop: $( $(this).attr('href') ).offset().top 
   }, 600);
});