$(function () {
    // 首屏效果
    $(".ys-jm-banner img").animate({
        top:"0",
        opacity:1
    },2000);
    $(".ys-company-wrap").animate({
        "margin-top":"0px",
        opacity:1
    },1000);


    // 公司推荐
    var top = $(".ys-per-xmzx").eq(1).offset().top;
    $(window,document).scroll(function(){
        if($(window).scrollTop()>top || $(document).scrollTop()>top){
            $(".ys-per-gstj:nth-child(2n)").find("a").addClass("animate1");
            $(".ys-per-gstj:nth-child(2n+1)").find("a").addClass("animate2");
            $(".ys-per-gstj:nth-child(2n+3)").find("a").addClass("animate3");
            return false;
        }
    })

    $(".ys-per-zsxm-desc span").each(function () {
        if($(this).text().length>50){
            $(this).text($(this).text().substring(0,50)+"...");
        }
    })


    // 招商项目轮播
    $(".ys-per-slt").each(function (){
        $(this).click(function () {
            //获取当前的点击索引
            var index = $(this).index();
            var sltnum = $(".ys-per-slt").length;
            // 给每个对应的显示内容添加选中类名
            $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(index).addClass("ys-per-zsxm-r-active");
            $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(index).addClass("ys-per-zsxm-l-active");
            $(".ys-per-slt").removeClass("ys-per-slt-active").eq(index).addClass("ys-per-slt-active");
            if(sltnum>3){
                var lastPosition = -160*(sltnum-3);
                //如果索引值是0,1,2时
                if(index<2){
                    $(".ys-slt-list").css("left","0");
                }else{
                    //索引值大于2并且不是最后一个时
                    if(index+1<sltnum){
                        $(".ys-slt-list").animate({"left":-160*(index-1)});
                    }else{
                        //为最后一个时
                        $(".ys-slt-list").css("left",lastPosition);
                    }

                }
            }
        })
    })
    // 招商项目点击事件
    // 点击左箭头
    $(".ys-left-btn").click(function () {
        var this_index = $(".ys-per-slt").index($(".ys-per-slt-active"));
        var sltlenght = $(".ys-per-slt").length;
        if(sltlenght<=3){
            if(this_index>0){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index-1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index-1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index-1).addClass("ys-per-zsxm-l-active");
                $(".ys-slt-list").css("left","0");
            }
        }else{
            if(this_index == 1){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index-1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index-1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index-1).addClass("ys-per-zsxm-l-active");
            }else if(this_index > 1){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index-1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index-1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index-1).addClass("ys-per-zsxm-l-active");
                if(this_index-3>0){
                    $(".ys-slt-list").animate({"left":-160*(this_index-3)});
                }else{
                    $(".ys-slt-list").animate({"left":0});
                }

            }
        }
    })

    // 点击右箭头
    $(".ys-right-btn").click(function () {
        var this_index = $(".ys-per-slt").index($(".ys-per-slt-active"));
        var sltlenght = $(".ys-per-slt").length;
        if(sltlenght<=3){
            if(this_index+1<sltlenght){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index+1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index+1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index+1).addClass("ys-per-zsxm-l-active");
                $(".ys-slt-list").css("left","0");
            }
        }else{
            if(this_index == 0){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index+1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index+1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index+1).addClass("ys-per-zsxm-l-active");
            }else if(this_index >0 && this_index+1 <sltlenght){
                $(".ys-per-slt").removeClass("ys-per-slt-active").eq(this_index+1).addClass("ys-per-slt-active");
                $(".ys-per-zsxm-r").removeClass("ys-per-zsxm-r-active").eq(this_index+1).addClass("ys-per-zsxm-r-active");
                $(".ys-per-zsxm-l").removeClass("ys-per-zsxm-l-active").eq(this_index+1).addClass("ys-per-zsxm-l-active");
                if(this_index <sltlenght-1){
                    if(this_index+3<sltlenght){
                        $(".ys-slt-list").animate({"left":-160*(this_index)});
                    }else{
                        $(".ys-slt-list").animate({"left":-160*(sltlenght-3)});
                    }
                }else{
                    return false;
                }


            }
        }

    })
})