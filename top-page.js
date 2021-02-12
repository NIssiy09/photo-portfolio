$(function(){

    $(function() {
        setTimeout(function(){
            $('.start').fadeOut(1000);
        },100);

        setTimeout(function(){
            $('h1,.list-container').fadeIn(1000)
        },1500)
    });
    

    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots: true,
        infinite: true,
        speed: 1200,
        fade: true,
        cssEase: 'linear',
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:1,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow:1,
                }
            },
        ]

    });


    var position1 = $('.gallery').offset().top;
      $('#jump1').click(function(){
        $("html,body").animate({
            scrollTop : position1
        }, {
            queue : false
        });   
      });

      var position2 = $('.profile').offset().top;
      $('#jump2').click(function(){
        $("html,body").animate({
            scrollTop : position2
        }, {
            queue : false
        });   
      });

      var position3 = $('.contact').offset().top;
      $('#jump3').click(function(){
        $("html,body").animate({
            scrollTop : position3
        }, {
            queue : false
        });   
      });

      var position4 = $('.sns').offset().top;
      $('#jump4').click(function(){
        $("html,body").animate({
            scrollTop : position4
        }, {
            queue : false
        });   
      });

      var positionTop = $('.main-window').offset().top;
      $('#jump-top').click(function(){
        $("html,body").animate({
            scrollTop : positionTop
        }, {
            queue : false
        });   
      });
            

      $(window).scroll(function (){
        $('.header1,.header2,.header3,.header4,.photo-box,.slider,.prof-text-box,.service-item').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 100){
                  $(this).addClass('scrollIn');
                }
            });
        });
    
    
    $('.close-button span').click(function(){
        $('.mail-modal').removeClass('on');
    });

    $('.message i').click(function(){
        $('.mail-modal').addClass('on');
    });
    
       
          

    
});
