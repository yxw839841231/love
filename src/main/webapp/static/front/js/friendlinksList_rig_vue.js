Vue.component("friendlinks", {
    props: {
        listTitle: {
            type: String,
            default: "标题"
        },
        friendlinks: {
            type: Array,
            default: []
        }
    },
    template: '<div class="panel rigList">' +
    '     <div class="panel-default panel-heading text-default font-bold">#&nbsp;{{listTitle}}</div>' +
    '           <div class="panel-body" style="padding:10px;">' +
    '           	<a v-for="friendlink of friendlinks"  :href="friendlink.url" class="transition padding-left10"  :title="friendlink.name" target="_blank">' +
    '					    {{friendlink.name}}' +
    '	            	</a>' +
    '           </div>' +
    '       </div>`'
});


$(function () {

    // 热门文章
    $.get('/friendlink/list', function (re) {

        if (re.code ==200) {

            new Vue({
                el: "#friendlink_rig",
                data: {
                    friendlinks: re.value
                }
            });
        }
    });

});