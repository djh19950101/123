

//sign in 登陆页面
$(function(){
	$(".landing").find("a").click(function(){
		$(this).addClass("tab").siblings().removeClass("tab");
	})
	$("#zh").click(function(){
		$(".zh_land").show();
		$(".zh_er").hide();
	})
	$("#ew").click(function(){
		$(".zh_er").show();
		$(".zh_land").hide();
	})
})


//sign up 注册页面
$(function(){
	$("#dh").blur(function(){
		if($("#dh").val()==""){
			$(".phone p").show();
		}else{
			$(".phone p").hide();
		}
	})
	$("#yz").blur(function(){
		if($("#yz").val()=="" || $("#yz").val().length<6){
			$(".checked p").show();
		}else{
			$(".checked p").hide();
		}
	})
	
	$("#btnn").click(function(){
			if($("#dh")=="" ||$("#yz")==""){
				alert("账号或密码不能为空!!")
			}else{
				ajaxRequest("post","../php/regist.php",true,{
				"account":$("#dh").val(),
				"secret":$("#yz").val(),
				"mobile":"1"
				},function(data){
				document.write(data);
			})
			alert("恭喜您注册成功");
		}
	})
	
	
})
