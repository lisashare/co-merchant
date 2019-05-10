$(function(){
    $('#list__first li').on('click',function(){
        $('#list__first li').removeClass('filter--active')
        $(this).addClass('filter--active');
    })
    $('#list__second li').on('click',function(){
        $('#list__second li').removeClass('filter--active')
        $(this).addClass('filter--active');
    })
    $('#list__third li').on('click',function(){
        $('#list__third li').removeClass('filter--active')
        $(this).addClass('filter--active');
    })
    $('.filter__icon').on('click',function(){
        if($('#content__first').hasClass('other__item--auto')){
            $('#content__first').removeClass('other__item--auto')
            $(this).removeClass('filter__icon--up')
        }else{
            $('#content__first').addClass('other__item--auto')
            $(this).addClass('filter__icon--up')
            
        }
    })
    $('#trade li').on('click',function(){
        $('#trade li').removeClass('active')
        $(this).addClass('active');
    })
    $('#search li').on('click',function(){
        $('#search li').removeClass('active')
        $(this).addClass('active');
    })
})