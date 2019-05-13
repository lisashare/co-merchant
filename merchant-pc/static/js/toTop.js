jQuery(document).ready(function($) {
    /*$("<div id='toTop'><img src='/image/button_backbox.png'></div>").appendTo('body');
    $("#toTop").css({
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '0',
        position: 'fixed',
        cursor: 'pointer',
        zIndex: '999999',
    });*/
    if ($(this).scrollTop() == 0) {
        $("#toTop").hide();
    }
    $(window).scroll(function(event) {
        if ($(this).scrollTop() == 0) {
            $("#toTop").hide();
        }
        if ($(this).scrollTop() != 0) {
            $("#toTop").show();
        }
    });
    $("#toTop").click(function(event) {
        $("html,body").animate({ scrollTop: "0px" }, 100);
    });

});