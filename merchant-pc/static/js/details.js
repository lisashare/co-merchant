$(function () {
    var $navs = $('.fixed__nav__list ul li')
    var $sections = $('.section')
    var $window = $(document)
    navLength = $navs.length - 1;
    var titleTop = $('.tab__wrapper').offset().top;
    $window.on('scroll', function () {
        if($(document).scrollTop() > titleTop){
            $('.tab__wrapper').css({
                "position":"fixed",
                "top":0
        })
       }else{
    
          $('.tab__wrapper').css({
              "position":"absolute",
              "top":"0px"
          })
        }
  
        // var scrollTop = $window.scrollTop(),
        //     len = navLength;
        // if (scrollTop > $('#new-info').offset().top && scrollTop < $('#form__content').offset().top - $('#form__content').height()) {
        //     $('.fixed__nav__list').show();

        // } else {
        //     $('.fixed__nav__list').hide();
        // }

        // for (var i = 0; i < len + 1; i++) {
        //     $navs.find('.fixed__icon').eq(i).removeClass('fixed__icon--active-' + Number(i + 1))
        // }
        // for (; len > -1; len--) {
        //     var that = $sections.eq(len);
        //     if (scrollTop >= that.offset().top - 100) {
        //         $navs.find('.fixed__text').removeClass('fixed__text--active').eq(len).addClass('fixed__text--active');
        //         if ($navs.find('.fixed__text').eq(len).hasClass('fixed__text--active')) {
        //             $navs.find('.fixed__icon').eq(len).addClass('fixed__icon--active-' + Number(len + 1))
        //         }
        //         break;
        //     }
        // }
    });
    $('.tab__wrapper .tab__item').on('click',function(){
        var index = $(this).index()
        var top = $('#tab'+Number(index+1)).offset().top-60
        $('body,html').stop().animate({  
            scrollTop: top  
        }, 500  
    );  

    })
    //点击右侧滚动定位
    $('.fixed__nav__list ul li').click(function () {
        var index = $(this).index()
        console.log( $sections.eq(index).offset().top)
        $('body,html').animate({
            scrollTop: $sections.eq(index).offset().top
        }, 500
        );
    })
    //点击输入框值
    $('.arrow__box__p').click(function(){
       $('#textarea').val($(this).text())
    })
    // $('.tab__item').click(function(){
    //     $('.tab__item a').removeClass('tab__item--active')
    //     $(this).find('a').addClass('tab__item--active')
    // })
})