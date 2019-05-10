$(function(){
    // 切换卡 行业细分
    $('.content__header__left__list li').click(function(){
        $('.content__header__left__list li').removeClass('li--active')
        $(this).addClass('li--active');
    })
     // 切换卡 投资金额
     $('.content__header__left__money__list li').click(function(){
        $('.content__header__left__money__list li').removeClass('money--active')
        $(this).addClass('money--active');
    })
     // 
     $('.btn__item--defult').click(function(){
        $('.btn__item--defult').removeClass('btn__item--orange')
        $(this).addClass('btn__item--orange');
    })
      // 
      $('.like__box__right ul li').click(function(){
        $('.like__box__right ul li').removeClass('active')
        $(this).addClass('active');
    })
    $('.left__content__item').click(function(){
        $('.left__content__item').removeClass('left__content__item--orange')
        $(this).addClass('left__content__item--orange');
    })
    //swiper
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })     
})