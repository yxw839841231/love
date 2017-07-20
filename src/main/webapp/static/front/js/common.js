

//扩展Date， ISO 8601日期扩展格式 与UTC 时间类型的相互转化
Date.prototype.setISO8601 = function (string) {  
        var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +  
            "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +  
            "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";  
        if(string)  
        {  
            var d = string.match(new RegExp(regexp));  
            var offset = 0;  
            var date = new Date(d[1], 0, 1);  
  
            if (d[3]) {  
                date.setMonth(d[3] - 1);  
            }  
            if (d[5]) {  
                date.setDate(d[5]);  
            }  
            if (d[7]) {  
                date.setHours(d[7]);  
            }  
            if (d[8]) {  
                date.setMinutes(d[8]);  
            }  
            if (d[10]) {  
                date.setSeconds(d[10]);  
            }  
            if (d[12]) {  
                date.setMilliseconds(Number("0." + d[12]) * 1000);  
            }  
            if (d[14]) {  
                offset = (Number(d[16]) * 60) + Number(d[17]);  
                offset *= ((d[15] == '-') ? 1 : -1);  
            }  
            offset -= date.getTimezoneOffset();  
            time = (Number(date) + (offset * 60 * 1000));  
            this.setTime(Number(time));  
        }  
        else  
        {  
            return;  
        }  
    } 

var P = {
	
		// 分页
		toThePageFun : function(pageNumber){
			window.location.href = this.changeURLPar(window.location.href,'page',pageNumber);		
		},

		//获取url参数的值：name是参数名
        getQueryString : function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return (r[2]);
            }
            return null;
        },

        //设置url参数值，ref参数名,value新的参数值
        changeURLPar : function(url, ref, value)
        {
            var str = "";
            if (url.indexOf('?') != -1){
            	str = url.substr(url.indexOf('?') + 1);
            }else{
            	return url + "?" + ref + "=" + value;
            }
                
            var returnurl = "";
            var setparam = "";
            var arr;
            var modify = "0";
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (i in arr) {
                    if ((arr[i].split('='))[0] == ref) {
                        setparam = value;
                        modify = "1";
                    }else {
                        setparam = arr[i].split('=')[1];
                    }
                    returnurl = returnurl + arr[i].split('=')[0] + "=" + setparam + "&";
                }
                returnurl = returnurl.substr(0, returnurl.length - 1);
                if (modify == "0"){
                	if (returnurl == str){
                		returnurl = returnurl + "&" + ref + "=" + value;
		                }
                	}
                    
            }else {

                if (str.indexOf('=') != -1) {
                    arr = str.split('=');
                    if (arr[0] == ref) {
                        setparam = value;
                        modify = "1";
                    }else {
                        setparam = arr[1];
                    }
                    returnurl = arr[0] + "=" + setparam;
                    if (modify == "0"){
                    	if (returnurl == str){
                    		returnurl = returnurl + "&" + ref + "=" + value;
                    	}
                    }
                }else{
                	returnurl = ref + "=" + value;
                    }

            
            }

            return url.substr(0, url.indexOf('?')) + "?" + returnurl;
        },

        //删除参数值
        delQueStr : function (url, ref) {
            var str = "";
            if (url.indexOf('?') != -1) {
                str = url.substr(url.indexOf('?') + 1);
            }else {
                return url;
            }
            var arr = "";
            var returnurl = "";
            var setparam = "";
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (i in arr) {
                    if (arr[i].split('=')[0] != ref) {
                        returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                    }
                }
                return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
            }else {
                arr = str.split('=');
                if (arr[0] == ref) {
                    return url.substr(0, url.indexOf('?'));
                }else {
                    return url;
                }
            }
        },

        // 根据MongoDB时间返回对应的时间格式
        getMyDateTime : function(t,tStyle){

            tStyle = tStyle ? tStyle : 'Y-m-d H:i:s';

            var myDate = new Date();
            myDate.setISO8601(t);

            
            return this.getDateTime(myDate.getTime(),tStyle);

        },


        // 根据时间戳返回相应格式的时间
        getDateTime : function(t,tStyle){
            var ts = tStyle ? tStyle : 'Y-m-d H:i:s';
            var tstr = t ? t : new Date().getTime();
            var myDate = new Date(tstr);
            var Y = myDate.getFullYear();
            var m = myDate.getMonth()+1;
            m = m < 10 ? '0'+ m : m;
            var d = myDate.getDate();
            d = d < 10 ? '0'+ d : d;
            var H = myDate.getHours();
            H = H < 10 ? '0'+ H : H;
            var i = myDate.getMinutes();
            i = i < 10 ? '0'+ i : i;
            var s = myDate.getSeconds();
            s = s < 10 ? '0'+ s : s;
            ts = ts.replace('Y',Y);
            ts = ts.replace('m',m);
            ts = ts.replace('d',d);
            ts = ts.replace('H',H);
            ts = ts.replace('i',i);
            ts = ts.replace('s',s);
            return ts; 
        },

        // 去掉字符串首尾空格
        trim : function (str){
            if(str == ''){
                return str;
            }else{
                return str.replace(/(^\s*)|(\s*$)/g, "");
            }   
        },

        //是否含有中文（也包含日文和韩文）
        isChineseChar : function (str){   
           var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
           return reg.test(str);
        },

        //同理，是否含有全角符号的函数
        isFullwidthChar : function (str){
           var reg = /[\uFF00-\uFFEF]/;
           return reg.test(str);
        } ,

        // 获取字符串长度
        getByteLen : function (val) {
                var len = 0;
                for (var i = 0; i < val.length; i++) {
                     var a = val.charAt(i);
                     if (a.match(/[^\x00-\xff]/ig) != null) 
                    {
                        len += 2;
                    }
                    else
                    {
                        len += 1;
                    }
                }
                return len;
        },

        // 改变layui遮罩的透明度0-1
        changeLayuiShade : function(n){
            // 遮罩改为透明
            $(".layui-layer-shade").css({
                  opacity:n,
                  filter:"alpha(opacity=n*100)"
            });
        },

        // alert
        alert : function(s,t){
            var tit = t ? '提示' : t;
            layer.alert(s,{title:t});
            this.changeLayuiShade(0);
        },
      
}






// 保存评论

function saveCommentFun(data,fun){
    $.ajax({
        type : 'post',
        url : "/api/comment/add",
        data : data,
        dataType : 'json',
        error : function(){},
        success : function(re){
            // console.log(re);
            fun(re);
        }
    });
};
