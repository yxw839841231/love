Vue.component("hot-arc", {
    props: {
        listTitle: {
            type: String,
            default: "标题"
        },
        contents: {
            type: Array,
            default: []
        }
    },
    template: '<div class="panel rigList">' +
    '     <div class="panel-default panel-heading text-default font-bold">#&nbsp;{{listTitle}}</div>' +
    '           <div class="panel-body">' +
    '               <ul class="list-group rigArcList">' +
    '                 <li class="list-group-item" v-for="content of contents">' +
    '                     <a :href="content.url" class="transition"><i class="layui-icon transition">&#xe609;</i>&nbsp;{{content.title}}</a>' +
    '                 </li>' +
    '               </ul>' +
    '           </div>' +
    '       </div>'
});


$(function () {

    // 推荐文章
    $.get('/article/list', function (re) {
        if (re.code == 200) {
            var html = "";
            for (var d of re.value) {
                html += '<div class="panel panel-default transition arclist">' +
                    '<div class="panel-heading text-default" style="padding-right:40px;">' +
                    '   <a class="text-default transition" href="javascript:void()">' + d.title + '</a>' +
                    '   <a href="javascript:void()" class="to transition text-default">' +
                    '       <span class="glyphicon glyphicon-share-alt"></span>' +
                    '   </a>' +
                    '</div>' +
                    '<div class="panel-body  hasArcImg">' +
                    '   <a href="javascript:void()" title="'+d.title+'">' +
                    '   <img src="/static/front/images/official_1498008446296_o5sX21kBdpvR2c0-I7zF_SR1.jpg" width="140" height="90" alt="'+d.title+'">' +
                    '   </a>' +
                    '   <p class="des">' + d.describle + '</p>' +
                    '<p class="tags" data-contentid="5949caa3446cb0aea4f6f00f">' +
                    '   <span class="layui-small-hidden"><span class="glyphicon glyphicon-time"></span>&nbsp;' + d.createtime + '&nbsp;</span>' +
                    '<span class="glyphicon glyphicon-eye-open padding-left10"></span>&nbsp;108&nbsp;' +
                    '<i class="layui-icon padding-left10"></i>&nbsp;<span class="commentNum">1</span>' +
                    '   <span class="layui-small-hidden padding-left10">' +
                    '   <span class="glyphicon glyphicon-tags"></span>&nbsp;&nbsp;' + d.keywords +
                    '</span>' +
                    '<span class="pull-right text-default">' +
                    '   <span class="glyphicon glyphicon-bookmark "></span>&nbsp;<a href="javascript:void()" title="" class="text-default">'+d.author+'</a>' +
                    '</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>';
            }

            $("#recomendAri").empty().append(html);

        }
    });

    // 热门文章
    $.get('/article/list', function (re) {
        if (re.code == 200) {
            var html = '<div class="panel rigList">' +
                '     <div class="panel-default panel-heading text-default font-bold">#&nbsp;热门文章</div>' +
                '           <div class="panel-body">' +
                '               <ul class="list-group rigArcList">';
            for (var d of re.value) {
                html += '                 <li class="list-group-item" v-for="content of contents">' +
                    '                     <a :href="content.url" class="transition"><i class="layui-icon transition">&#xe609;</i>&nbsp;' + d.title + '</a>' +
                    '                 </li>';
            }
            html += '               </ul>' +
                '           </div>' +
                '       </div>';

            $("#hotArcList_rig").empty().append(html);

        }
    });

});