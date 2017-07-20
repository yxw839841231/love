layui.define(['layer', 'form'], function (exports) {
    var layer = layui.layer,
        $ = layui.jquery,
        ELEM = '.zjoin-upload',
        ZJOIN_default = {},
        Zjoin = function (options) {
            var that = this;
            ZJOIN_default = that.config = options || {};
            return that;
        };

    function zjoin(options) {
        new Zjoin(options);
    }


    //全局设置
    Zjoin.prototype.set = function (options) {
        var that = this;
        $.extend(true, that.config, options);
        return that;
    };
    var upload = function () {
        layer.open({
            type: 1,
            id: 'fly-jie-upload',
            title: '插入图片',
            shade: false,
            area: '300px',
            skin: 'layui-layer-border',
            content: ['<div id="container" class="layui-form layui-form-pane" style="margin: 20px;"><p><div id="pickfiles" class="layui-btn" style="width:100%;padding:0!important"><div id="upload-progress" style="width:100%;height:100%;">上传文件</div></div></p></div>'].join(''),
            success: function (layero, index) {
                $.ajax({
                    type: "POST",
                    url: "/api/uptoken/",
                    dataType: "json",
                    success: function (data) {
                        if (data.code != 200) return layer.close(index), layer.msg('无效token', {
                            icon: 5
                        });
                        //$("#upload-progress").css({"background":"url(/Public/default/images/loading.jpg) no-repeat","background-size":"0% 100%"});
                        var uploader = Qiniu.uploader({
                            runtimes: 'html5,flash,html4',
                            browse_button: 'pickfiles',
                            uptoken_url: '/api/uptoken/',
                            uptoken: data.value,
                            unique_names: false,
                            save_key: false,
                            domain: 'http://ohwphyjeu.bkt.clouddn.com/',
                            get_new_uptoken: false,
                            container: 'container',
                            max_file_size: '1mb',
                            max_retries: 3,
                            dragdrop: !0,
                            drop_element: 'container',
                            chunk_size: '1mb',
                            filters: {
                                mime_types: [{
                                    title: "Image files",
                                    extensions: "jpg,gif,png,jpeg"
                                }]
                            },
                            auto_start: !0,
                            init: {
                                'FilesAdded': function (up, files) {
                                    $("#upload-progress").text("上传中......");
                                    plupload.each(files, function (file) {
                                    });
                                },
                                'BeforeUpload': function (up, file) {
                                },
                                'UploadProgress': function (up, file) {
                                    $("#upload-progress").css({
                                        "background-size": up.total.percent + "% 100%"
                                    })

                                },
                                'FileUploaded': function (up, file, info) {
                                    var z = JSON.parse(info);
                                    var img_domain = "http://ohwphyjeu.bkt.clouddn.com/"
                                    ZJOIN_default.image.attr("src", img_domain + z.key);

                                },
                                'Error': function (up, err, errTip) {
                                    layer.msg('上传失败', {
                                        icon: 5
                                    })
                                },
                                'UploadComplete': function (data) {
                                    $("#upload-progress").text("上传文件");
                                    layer.close(index);

                                },
                                'Key': function (up, file) {
                                    //var key = "";
                                    //return key
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    var dom = $(document);
    //绑定类zjoin-upload的上传事件
    dom.on('click', ELEM, upload).on('click', '*[zjoin-upload]', upload);
    /*exports(MOD_NAME, function (options) {
     new Zjoin(options)
     });*/

    exports('zjoin', zjoin); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
}); 