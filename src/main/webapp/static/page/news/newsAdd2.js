layui.config({
	base: '/js' //你的模块目录
}).use(['form','layer','jquery','layedit','laydate','zjoin'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		layedit = layui.layedit,
		$ = layui.jquery,
		zjoin=layui.zjoin;

	//创建一个编辑器
	var editIndex = layedit.build('news_content');

	//自定义验证规则
	form.verify({
		title: function (value) {
			if (value.length < 2) {
				return '标题至少得2个字符';
			}
		} ,
		content: function (value) {
			layedit.sync(editIndex);
		}
	});

	form.on("submit(addNews)",function(data){
		//弹出loading
		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
		$.ajax({
			url:'/article/add',
			type:'post',
			data:data.field,
			success:function(data){
				//layer.closeAll();
				top.layer.close(index);
				top.layer.msg("文章添加成功！");
				layer.closeAll("iframe");
				//刷新父页面
				parent.location.reload();
			}
		});
		return false;
	});

	zjoin({image:$("#cover-image")});


}); //加载入口
