

$(function(){	
		//无缝轮播
		$(function(){
		var $ul = $(".lb-ul");
		var $uli = $ul.find("li");
		$uli.first().clone().appendTo($ul);
		$uli.last().clone().prependTo($ul);
		var len = $ul.find("li").size();
		//console.log(len);   
		var li_width = $uli.width();
		//console.log(li_width);
		$ul.width(li_width*len);
		//console.log(li_width*len);
		$ul.css("left",-li_width);//初始图片的位置 显示第一张图片
		var i=1;
		var timer=setInterval(Move,3000);
		//上一张
		$("#left").click(function(event){
//			Move();	
//			event.stopPropagation();
		})
		//下一张
		$("#right").click(function(event){
			Move();
			//event.stopPropagation();
			return false;
		})
		function Move(){
			i++;
			if(i==len-1){
				$(".lb-jb li").eq(0).addClass("select").siblings().removeClass("select");
			}
			$(".lb-jb li").eq(i-1).addClass("select").siblings().removeClass("select");
			$ul.animate({"left":-i*li_width +'px'},1000,function(){
				if(i == len-1){
					i=1;
					$ul.animate({"left":-li_width+"px"},1000);
				}
				if(i == len-2){
					i=0;
					$ul.css("left","0");
				}
			})
		}
	})	
})

//ajax调取数据
$(function(){
			$.ajax({
				type:"get",
				url:"js/list.json",
				async:true,
				success:function(data){
					//大的菜单栏模板数据调取
					var html = template("cdMB",data);
					$(".aside").html(html);
					$(".aside ._ul li").mouseenter(function(){
						$(this).find("div").show();
					})
					$(".aside ._ul li").mouseleave(function(){
						$(this).find("div").hide();
					})
					//智能硬件部分
					var html1 = template("yjMB",data);
					$(".hard-right").html(html1);
					$(".transform ul li").mouseenter(function(){
						$(this).css({
							transform:"translateY(-2px)",
       						boxShadow:"0px 6px 15px #8b8b8b",
       						transition:"all 0.3s"
						})	
					})
					$(".transform ul li").mouseleave(function(){
						$(this).css({
							transform:"translateY(0)",
       						boxShadow:"0px 0px 0px #8b8b8b",
       						transition:"all 0.3s"
						})	
					})
					
					//明星单品部分
					var html_2 = template("mxMB",data);
					$(".xm_show").html(html_2);
					var $xm = $(".xm_show ul");
					setInterval(_move,10000);
					var i=0;
					$("#btn-lefr").click(function(){
						$xm.stop().animate({"left":0},1000);	
					})
					$("#btn-right").click(function(){
						$xm.stop().animate({"left":-Math.ceil($xm.width()/2)+"px"},1000);
					})
					function _move(){
						i++;
						xm_move();
					}
					function xm_move(){
						$xm.animate({"left":-Math.ceil($xm.width()/2)+"px"},1000,function(){
							if(i==2){
								$xm.stop().animate({"left":0},1000);
							}
						});
					}
					//选项卡部分的商品调取
					var tabhtml = template("tabMB",data);
					$(".r-right").html(tabhtml);
					$(".r-right li").mouseenter(function(){
						$(this).find(".show").show().animate({"top":"200px"},200);
						$(this).css({
							transform:"translateY(-2px)",
       						boxShadow:"0px 6px 15px #8b8b8b",
       						transition:"all 0.3s"
						})	
					})
					$(".r-right li").mouseleave(function(){
						$(this).find(".show").stop().animate({"top":"290px"},200);
						$(this).css({
							transform:"translateY(0)",
       						boxShadow:"0px 0px 0px #8b8b8b",
       						transition:"all 0.3s"
						})	
					})	
					//选项卡切换
					var $tab = $(".xxk ul li");
					var $ul = $(".r-right ul");
					$ul.eq(0).addClass("display");
					$tab.eq(0).addClass("tab-active");
					var index = $(this).index();
					var i;
					console.log(i);
					$tab.mouseenter(function(){					
						$(this).eq(index).addClass("tab-active").siblings().removeClass("tab-active");
						var i = $(this).index();
//						console.log(i);
						$ul.eq(i).addClass("display").siblings().removeClass("display");
					})
					$tab.mouseleave(function(){
						$(this).eq(index).addClass("tab-active").siblings().removeClass("tab-active");
						var i = $(this).index();
						$ul.eq(i).addClass("display").siblings().removeClass("display");
//						console.log(i);
					})
				}
			})
})



//商品详情页
//放大镜


//
//列表页
$(function(){
				function fn(data){
				var massage = "";
				for(var i in data.result){
					$("#box").show();
					massage+=('<li>'+data.result[i][0]+'<span>'+data.result[i][1]+'</span>'+'</li>');
				}
				$("#box").html(massage);
			}
			
			$("#txt").on("input",function(){
				$("")
				var _url="https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?";
				$.getJSON(_url,fn);
			})
})
