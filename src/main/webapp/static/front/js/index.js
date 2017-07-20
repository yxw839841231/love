
$(function(){
	
	// 赞一下/踩一下
	$("body").on("click","a[data-praise]",function(){

		var _this = $(this);
		
		if(_this.data('toPraise')){
			return false;
		}else{
			var commentId = _this.parents('p:first').data('commentid');
			var type = _this.data('praise');
			var num = Number(_this.find('span.num').text());
			$.post('/api/comment/praise',{commentId:commentId,type:type},function(re){
				if(!re.code){
					num++;
					layer.msg(re.message,{icon:1,time:1000});
					_this.data('toPraise',1);
					_this.find('span.num').text(num);
				}else{
					layer.msg(re.message,{icon:5,time:1000});
				}
			});
		}
	});

	// 退出
	$("body").on("click","#exitBtn,.exitBtn",function(){
		layer.confirm('确定退出吗？',{icon:3,title:'提示'},function(index){
			layer.close(index);
				$.ajax({
				url : '/api/user/logout',
				success : function(data){
					if(!data.code){
						layer.msg(data.message,{icon:1,time:1000},function(){
							window.location.reload(true);
						});
					}else{
						layer.msg(data.message,{icon:5,time:1000});
					}
				}
			});
		});
		
	});

});

// 用户登录
layui.use(['element','form','layer'],function(){
	var element = layui.element
		,form = layui.form()
		,layer = layui.layer;


	// 登陆
	var loginLayerIndex = '';
	$("body").on("click",".loginBtn",function(){
		loginLayerIndex = layer.open({
			type : 1,
			title:'登陆',
			content : $('#loginBox')
		});
	});

	form.verify({
		login_username : function(val){
			val = P.trim(val);
			if(val == ''){
				return '用户名不能为空！';
			}
		},
		login_password : function(val){
			val = P.trim(val);
			if(val == ''){
				return '密码不能为空！';
			}
		}
	});

	form.on('submit(login)',function(data){
		
		$.post('/api/user/login',data.field,function(re){
			
			if(!re.code){
				layer.close(loginLayerIndex);
				layer.msg(re.message,{icon:1,time:1000},function(index){
					layer.close(index);
					window.location.reload(true);
				});
			}else{
				layer.msg(re.message,{icon:5,time:1000});
			}
		});

		return false;
	});

	// 注册
	var registerLayerIndex = '';
	$("body").on("click",".registerBtn",function(){
		registerLayerIndex = layer.open({
			type : 1,
			title:'注册',
			content : $('#registerBox')
		});
	});
	var repassword = '';
	form.verify({
		nikename : function(val){
			val = P.trim(val); 

			if(val == ''){
				return '昵称不能为空';
			}

			var reg = /^[a-zA-Z0-9\u4e00-\u9fa5_-]+$/;
			if(!reg.test(val)){
				
				return '昵称只能是数字、字母、汉字、和下划线';

			}
		},
		username : function(val){
			val = P.trim(val);

			if(val == ''){
				return '用户名不能为空！';
			}

			var reg = /^[_a-zA-Z0-9-@.]{6,16}$/;
	  		if(!reg.test(val)){
	  			return '用户名格式：6-16个字符，支持字母、数字、减号、@、点.或下划线';
	  		}


		},
		password : function(val){
			val = P.trim(val);
			if(val == ''){
				return '密码不能为空！';
			}

			var reg = /^[_a-zA-Z0-9-*%￥#@!~()+=.]{6,20}$/;
	  		if(!reg.test(val)){
	  			return '密码格式：6-20位，字母、数字、符号';
	  		}else{
	  			repassword = val;
	  		}

			
		},
		repassword : function(val){
			val = P.trim(val);
			if(val != repassword){
				return '两次密码不一致！';
			}
		}
	});

	form.on('submit(register)',function(data){
		
		$.post('/api/user/reg',data.field,function(re){
			
			if(!re.code){
				layer.close(registerLayerIndex);
				layer.msg(re.message,{icon:1,time:1000},function(index){
					layer.close(index);
					window.location.reload(true);
				});
			}
		});

		return false;
	});
});



