//下载选择
$(".icon-wraper").click(function(){
	if( $(".catering-inner").hasClass("hidden") ){
		$(".catering-inner").removeClass("hidden");
	}else{
		$(".catering-inner").addClass("hidden");
	}
	
});

$(".catering-inner li a").click(function(){
	$(".icon-txt").html( $(this).text() )
});