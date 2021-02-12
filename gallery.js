$(function(){
    $('.grid-item').imagesLoaded( function() {
        // images have loaded
      });
      
      // options
      $('.grid-item').imagesLoaded( {
        // options...
        },
        function() {
          // images have loaded
        }
      );
    
    
    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        isFitWidth: true 
    
      });

      if (window.matchMedia( "(max-width: 768px)" ).matches) {
        /* ウィンドウサイズが 768px以下の場合のコードをここに */
        $('.grid').masonry({
          columnWidth: 30
        });
        } else {
          $('.grid').masonry({
            columnWidth: 100
          });
          /* ウィンドウサイズが 768px以上の場合のコードをここに */
        }
    

      $('.grid-item').click(function(){
        var popupImage = $(this).children('img').attr('src');
        $('#popup-img').attr("src",popupImage)

        $('#popup').addClass('show')
      });

    $('#close').click(function(){
      $('#popup').removeClass('show')
    });
    
      
});




$(function() {
  setTimeout(function(){
      $('.start').fadeOut(1000);
  },100);
});

