


Vue.component("suggests-list",{
	props:{
		listTitle : {
			type : String,
			default : "标题"
		},
		suggests : {
			type : Array,
			default : []
		}
	},
	template : '<div class="panel rigList">'+
	'     <div class="panel-default panel-heading text-default font-bold">#&nbsp;{{listTitle}}</div>'+
	'	            <div class="panel-body commentBox rigSuggest">'+
	'	            	<div class="panel commentList" v-for="suggest in suggests">'+
	'	            		<div class="panel-body">'+
	'	            			<img :src="suggest.user.photo" width="42" height="42" alt="" class="layui-circle transition photo">'+
	'	            			<p>'+
	'	            				<span class="text-default">{{suggest.user.nikename}}&nbsp;</span>'+
	'	            				<span class="pull-right text-default" style="color:#999;">{{suggest.addTime}}</span>'+
	'	            			</p>'+
	'	            			<p style="padding-top:5px;" v-html="suggest.comment">{{suggest.comment}}</p>'+
	'	            			<p class="text-right to" :data-commentid="suggest._id">'+
	'	            				<a href="javascript:void(0);" title="赞一下" data-praise="1"><span class="glyphicon glyphicon-thumbs-up"></span>(<span class="num">{{suggest.praise}}</span>)</a>'+
	'	            				<a href="javascript:void(0);" title="踩一下" data-praise="-1"><span class="glyphicon glyphicon-thumbs-down"></span>(<span class="num">{{suggest.tread}}</span>)</a>'+
	'	            			</p>'+
	'	            		</div>'+
	'	            	</div>'+
	'	            </div>'+
	'	        </div>'
});



$(function(){

	// 热门文章
	$.get('/comment/list',function(re){

		if(!re.code && re.data.comments.length > 0){

			var pub_photo = '/public/images/default-photo.png';

			

			for(comment of re.data.comments){
				comment.addTime = P.getMyDateTime(comment.addTime);
				comment.user.photo = comment.user.photo == '' ? pub_photo : comment.user.photo;
			}

			var comments = re.data.comments;

			comments.push.apply(comments,re.data.comments);

			new Vue({
				el : "#suggest_rig",
				data : {
					suggests : comments
				}
			});

			var commentList = $('#suggest_rig').find('.panel.commentList');
			commentList.each(function(index){
				if(index < 5){
					$(this).show();
				}else{
					$(this).hide();
				}	
			});
			
			var timer = null;
			var t = 3000;

			var cn = 0;
			timer = setInterval(function(){
				showCommentFun();
			},t);

			$('#suggest_rig').on('mouseover',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(function(){
					showCommentFun();
				},t);
			});

			function showCommentFun(){
				commentList.eq(cn).slideUp('slow');
				commentList.eq(cn+5).slideDown('slow',function(){
					if(cn == 0){
						commentList.each(function(index){
							if(index < 5){
								$(this).show();
							}else{
								$(this).hide();
							}	
						});
					}
				});
				cn++;
				cn = cn >= 10 ? 0 : cn;
			}

		}
	});

});