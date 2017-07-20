
Vue.component("category",{
	props:{
		listTitle : {
			type : String,
			default : "文章分类"
		},
		categories : {
			type : Array,
			default : []
		}
	},
	template : '<div class="panel rigList">'+
	'     <div class="panel-default panel-heading text-default font-bold">#&nbsp;{{title}}</div>'+
	'	            <div class="panel-body">'+
	'	            	<a :href="category.url" class="layui-btn layui-btn-primary category_block moveBorder" v-for="category of categories">'+
	'	            		{{describle}}'+
	'	            		<span class="top transition"></span>'+
	'	            		<span class="right transition"></span>'+
	'	            		<span class="bottom transition"></span>'+
	'	            		<span class="left transition"></span>'+
	'	            	</a>'+
	'	            </div>'+
	'	        </div>'
});


$(function(){

	// 热门文章
	$.get('/article/getHotList',function(re){
		if(re.code==200){
			new Vue({
				el : "#categoriesList_rig",
				data : {
					categories : re.value
				}
			});
		}
	});

});