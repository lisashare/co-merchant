$(function(){
  //左边图片切换卡
  var imgUrlFirst = $('.content__header__right img').eq(0).attr('src')
  $('.content__header__middle img').attr('src',imgUrlFirst)
  $('.content__header__right li').on('click',function(){
   var url =  $('.content__header__right img').eq($(this).index()).attr('src')
   $('.content__header__middle img').attr('src',url)
  })
    // 切换卡 行业细分
    // $('.content__header__left__list li').click(function(){
    //     $('.content__header__left__list li').removeClass('li--active')
    //     $(this).addClass('li--active');
    // })
     // 切换卡 投资金额
    //  $('.content__header__left__money__list li').click(function(){
    //     $('.content__header__left__money__list li').removeClass('money--active')
    //     $(this).addClass('money--active');
    // })
     // 
     $('.btn__item--defult').click(function(){
        $('.btn__item--defult').removeClass('btn__item--orange')
        $(this).addClass('btn__item--orange');
        $('.product__list').removeClass('product__list--show')
        $('.product__list').eq($(this).index()).addClass('product__list--show')
    })
      // 
    //   $('.like__box__right ul li').click(function(){
    //     $('.like__box__right ul li').removeClass('active')
    //     $(this).addClass('active');
    // })
    // $('.left__content__item').click(function(){
    //     $('.left__content__item').removeClass('left__content__item--orange')
    //     $(this).addClass('left__content__item--orange');
    // })
    //swiper
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination : '.swiper-pagination',
        paginationClickable :true,
      })     
     console.log($('.words').length)
    
     $('.words').each(function(){
      var maxwidth=30;
      if($(this).text().length>maxwidth){
      $(this).text($(this).text().substring(0,maxwidth));
      $(this).html($(this).html()+'...');
      }
      });
   
     
})
