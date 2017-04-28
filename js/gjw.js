$(function(){

//二维码
	
	$("#p1").hover(function(){
		$("#p2").css("display","block");
	},function(){
		$("#p2").css("display","none");
	})
//展开  图片高度切换效果
	var open=true;
	var close=true;
	if (open) {
		var timer=setTimeout(function(){
			open=false;
			$("#main1_top").animate({"height":"80px"},300,function(){
				$("#main1_top .img1").css("display","block");
				$("#main1_top .open1").text("展开");
				$("#main1_top .img1").animate({"top":"0"},300);
				$("#main1_top .img2").animate({"height":"180px"},300);
			});
		},3000)
	
	
	$("#main1_top .img2").hover(function(){
	
		open=true;
			timer=clearsetTimeout();
		if (open) {
			open=false;
			close=false;
				$("#main1_top").animate({"height":"270px"},300,function(){
				$("#main1_top .img1").css("display","block");
				$("#main1_top .open1").text("收起");
				$("#main1_top .img1").animate({"top":"0"},300);
				$("#main1_top .img2").animate({"height":"270px"},300);
			});
		} else{
			$("#main1_top").animate({"height":"270px"},300,function(){
				$("#main1_top .img1").css("display","none");
				$("#main1_top .open1").text("收起");
				$("#main1_top .img1").animate({"top":"0"},300);
				$("#main1_top .img2").animate({"height":"80px"},300);
			});
		}
	},function(){
			open=false;
			if (open) {
			open=true;
			close=true;
				$("#main1_top").animate({"height":"80px"},300,function(){
				$("#main1_top .img1").css("display","block");
				$("#main1_top .open1").text("展开");
				$("#main1_top .img1").animate({"top":"0"},300);
				$("#main1_top .img2").animate({"height":"180px"},300);
			});
		} else{
			$("#main1_top").animate({"height":"270px"},300,function(){
				$("#main1_top .img1").css("display","none");
				$("#main1_top .open1").text("收起");
				$("#main1_top .img1").animate({"top":"0"},300);
				$("#main1_top .img2").animate({"height":"80px"},300);
			});
		}
	})
}	
	
//	$("#main1_top>a>span").click(function(){
//		$("#main1_top .img2").css("display","none");
//		$("#main1_top .img1").css("display","block");
//		$("#main1_top>a>u").css("display","block");
//	})
//	$("#main1_top>a>u").click(function(){
//		$("#main1_top .img1").css("display","none");
//		$("#main1_top>a>u").css("display","block");
//	})
	
//关闭
	$("#main1_middle .right").click(function(){
		$("#main1_bottom").css("display","none");
	})
//购物车
	$("#gwc").hover(function(){
		$("#gwc").addClass("box");
	},function(){
		$("#gwc").removeClass("box");
	})

//banner
		$index=0;
	    var timer=null;
	    $l=$("#banner_tp1 li").size();
	    function move(){
	    	if($index>=$l-1){
	    		$index=-1;
	    	}
	    		$index++;
	    		$("#banner_tp1 li").eq($index).addClass("act");
	    		$("#banner_tp1 li").eq($index).siblings().removeClass("act");
	    		$("#banner_tp li").eq($index).animate({"opacity":"1"},1000);
	    		$("#banner_tp li").eq($index).siblings().animate({"opacity":"0"},1000);
	    	}
	    		timer=setInterval(move,3000);
	    		$("#banner_tp1 li").each(function(i){
	    			$(this).mouseover(function(){
	    				clearInterval(timer);
	    				$index=i;
	    				$('#lunboList>li').eq($index).css('background','#C40000').siblings().css('background','#656465');
//	    				$("#banner_tp1>li").eq($index).css("background","#c40000").siblings().css('background','#656465');
	    			    $("#banner_tp li").eq($index).animate({"opacity":"1"},600).siblings().animate({"opacity":"0"},600);
	    			    timer=setInterval(move,3000);
	    			})
	    		})
//  图片白条滑过  		
	$('#b1').hover(function(){
					$('#b1>.img1').stop().animate({'left':'190px'},3000,function(){
						$('#b1>.img1').css('left','-190px');
					});
				},function(){
					
				})    	



// 买一送一  轮播效果
	$("#main1 .main1_rt").hover(function(){
		$("#main1_bj").css("display","block");
	},function(){
		$("#main1_bj").css("display","none");
	})
	
//// 滚轮
//	$body.offset(function(){
//		if ($("#headed_all">1000)) {
//			
//		} else{
//			
//		}
//	})



// 页脚滚动效果
	var timer1=null;
	$n=0;
	$L=$("#footer1>ul>li").size();
	var timer1=setInterval(function(){
		$("#footer1>ul").animate({"height":"80px"},300,function(){
//			$("#footer1>ul>.p2").css("display","block");
			$("#footer1>ul>.p2").animate({"top":"-80px"},300);
		
		})
			
	},1000)
	






})


//var timer=setTimeout(function(){
//			open=false;
//			$("#main1_top").animate({"height":"80px"},300,function(){
//				$("#main1_top .img1").css("display","block");
//				$("#main1_top .open1").text("展开");
//				$("#main1_top .img1").animate({"top":"0"},300);
//				$("#main1_top .img2").animate({"height":"180px"},300);
//			});
//		},3000)