//页面下拉页面
	$(function(){
		$(".header .share>.more").click(function(){

			if($("#load").css("display")=="block"){
				$("#load").css("display","none");
			}else{
				$("#load").css("display","block");
			}
			var pag = $("#load");
			console.log(pag.find("span")[0])
			pag.find("span")[0].innerHTML = "为什么选择朴道鲜米";
			pag.find("span")[1].style.display = "none";
			pag.find("span")[2].style.display = "none";
			pag.find("span")[3].style.display = "none";
			pag.find("span")[4].style.display = "none";
			pag.find("span")[5].style.display = "none";
			pag.find("span")[6].innerHTML = "功能介绍";
			pag.find("span")[7].style.display = "none";
			pag.find("span")[8].innerHTML = "合伙人计划";
			pag.find("span")[9].style.display = "none";
			pag.find("span")[10].innerHTML = "战略合伙人";
			pag.find("span")[11].style.display = "none";
			pag.find("span")[12].style.display = "none";
			pag.find("span")[13].innerHTML = "联系我们";




		})
		/*var slide = $(".wrapper>.swiper-slide");*/
		/*console.log(slide.length);*/

		/*<li><a href="#S2">功能介绍</a></li>
		<li><a href="#S3">合伙人计划</a></li>
		<li><a href="#S4">战略合伙人</a></li>
		<li><a href="#S5">联系我们</a></li>*/


		/*pag[1].css("display","none");*/
		/*pag[0].html("为什么选择朴道鲜米");*/
		/*pag[0].html("为什么选择朴道鲜米");*/
		/*pag[0].innerHTML = "为什么选择朴道鲜米";*/



	})





//页面下拉点击跳转
/*$top=$(this).scrollTop();
	 $("div").each(function(){
	 $index=$(this).index();
	 $heigth=$(this).offset().top+$(this).height()/2;
	   })
	    		$("#load li li").click(function(){
	    			$index=$(this).index();
	    			$top=$("div").eq($index+2).offset().top;
	    			$("body").animate({"scrollTop":$top},600);
	    		})
$("#load li").click(function(){
	    			$index=$(this).index();
	    			$top=$(".swiper-slide").eq($index+2).offset().top;
	    			$("body").animate({"scrollTop":$top},600);
	    			$("#load").css("display","none");
	    	})*/
//分享出现
$(".header .share>.share_image").click(function(){
	$("#mask").css("display","block");
})
//分享消失
$("#mask>.btn").click(function(){
	$("#mask").css("display","none");
})
