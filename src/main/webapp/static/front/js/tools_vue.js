/**
 * 右下角小工具
 */

Vue.component("tools", {
    template: '<ul class="layui-fixbar">' +
    '<li class="shareBox">' +
    '<div class="bdsharebuttonbox">' +
    ' <a href="#" class="bds_qzone icon_qzone" data-cmd="qzone" title="分享到QQ空间">' +
    '<a class="icon_qzone transition" data-cmd="qzone">&nbsp;</a>' +
    '  </a>' +
    ' <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信">' +
    '	<a class="icon_weixin transition" data-cmd="weixin">&nbsp;</a>' +
    ' </a>' +
    '<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友">' +
    '<a class="icon_qq transition" data-cmd="sqq">&nbsp;</a>' +
    '</a>' +
    '</div>' +
    '</li>' +
    '<li class="layui-icon layui-small-hidden" id="shareBtn">&#xe641;</li>' +
    '<li class="layui-icon" id="backTop" style="height:50px;display:none;">&#xe604;</li>' +
    '</ul>'
});


$(function () {

    // 实例化tools
    new Vue({
        el: "#tools"
    });

    // 实例化分享部分
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "32"
        },
        "share": {}
    };
    with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
});

// 通过滚动事件监控返回顶部的按钮是否显示
window.onload = function () {
    // 点击页面 关闭分享按钮
    $('body').on('click', function (event) {
        $('.shareBox').slideUp('fast');
    });
    // 显示隐藏分享按钮组
    $('#shareBtn').on('click', function (event) {
        $('.shareBox').slideToggle('fast');
        event.stopPropagation();
        return false;
    });
    // 返回顶部
    $('#backTop').on('click', function () {
        var _this = $(this);
        $('html,body').animate({
            scrollTop: 0
        }, 500, function () {
            _this.slideUp('fast');
        })
    });
    scrollFun();
    $(window).scroll(function () {
        scrollFun();
    });
};
function scrollFun() {
    var htmlTop = $(document).scrollTop();
    if (htmlTop > 100) {
        $("#backTop").stop(true, false).slideDown('fast');
    } else {
        $("#backTop").stop(true, false).slideUp('fast');
    }
}