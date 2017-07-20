/*Vue.component("new-arc", {
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
    '<div class="panel-default panel-heading text-default font-bold">#&nbsp;{{listTitle}}</div>' +
    '<div class="panel-body">' +
    '  <ul class="list-group rigArcList">' +
    '     <li class="list-group-item" v-for="content of contents">' +
    '          <a :href="content.title" class="transition"><i class="layui-icon transition">&#xe609;</i>&nbsp;{{content.title}}</a>' +
    '       </li>' +
    '      </ul>' +
    '   </div>' +
    '</div>'
});*/
Vue.component('new-arc', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义属性
    // 这个属性名为 todo。
    props: {
        contents: {
            type: Array,
            default: []
        }
    },
    template: '<li v-for="content2 of contents">{{ content2.title }}</li>'
});

$(function () {
    // 热门文章
    $.get('/article/list', function (re) {
        if (re.code == 200) {
            var html ='<div class="panel rigList">' +
                '<div class="panel-default panel-heading text-default font-bold">#&nbsp;最新文章</div>' +
                '<div class="panel-body">' +
                '  <ul class="list-group rigArcList">' ;
            for(var d of re.value){
                html +=
                    '     <li class="list-group-item" v-for="content of contents">' +
                    '          <a :href="content.title" class="transition"><i class="layui-icon transition">&#xe609;</i>&nbsp;'+d.title+'</a>' +
                    '       </li>'
            }
            html += '      </ul>' +
                '   </div>' +
                '</div>';
            $("#newArcList_rig").empty().append(html);
        }
    });

});