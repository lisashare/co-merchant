$(function () {
    // 加盟分类hover样式
    $(".ys-per-jmf-img").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({width:"102%",height:"102%",left:"-1%",top:"-1%"},200);
        },function () {
            $(this).find("img").animate({width:"100%",height:"100%",left:"0",top:"0"},200);
        })
    })


    $(".ys-kdcb-tell").focus(function () {
        $(".ys-kdcb-tell").siblings().text("");
    })
    // 点击开始计算
    $(".ys-kdcb-submit").click(function(){
        var tell = $(".ys-kdcb-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!tell){
            $(".kdcb-msg").show().text("请输入手机号！");
            return false;
        }else{
            if(!myreg.test(tell)){
                $(".kdcb-msg").show().text("请输入正确的手机号！");
                return false;
            }else{
                $(".kdcb-msg").hide();
                $(".layer-jswc-wrap").fadeIn(200);     //计算成本显示
            }
        }
    })

    $(".jscb-btn").click(function(){
        $(".ys-shade").animate({"height":"100%"},300,function () {
            $(".layer-wrap").fadeIn(200);
        });
    })

//点击开店成本关闭按钮
    $(".layer-wrap .layer-close").click(function(){
        $(".layer-wrap").fadeOut(200,function () {
            $(".ys-shade").animate({height:"0"},100);
        });
    })
    $(".layer-jswc-wrap .layer-close").click(function(){
        $(".layer-wrap,.layer-jswc-wrap").fadeOut(200,function () {
            $(".ys-shade").animate({height:"0"},100);
        });
    })

    //点击选择店铺类型
    $(".ys-kdcb-select1").click(function(){
        $(".ys-dplx-list1").toggleClass("none");
    })

//点击选择每一项店铺类型
    $(".ys-per-dplx1").each(function(){
        $(this).click(function(){
            $(".ys-kdcb-select1").val($(this).text());
            $(".ys-dplx-list1").toggleClass("none");
        })
    })




})