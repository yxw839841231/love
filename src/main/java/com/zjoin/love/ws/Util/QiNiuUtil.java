/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.Util;

import com.qiniu.util.Auth;

/**
 * Created on 2017/5/3.
 *
 * @auther 地瓜
 */
public class QiNiuUtil {
    private static String ACCESS_KEY = "4MXTGV5qvvYhj6qdlIv92SdX8pLMxClncrXhG6I0";
    private static String SECRET_KEY = "AJzCT3at2wQDbf8LITVqZr-YRm_I3JQdRBCgcAHY";
    //要上传的空间
    private static String bucketname = "zjoin";

    //简单上传，使用默认策略，只需要设置上传的空间名就可以了
    public static String getUpToken(){
        Auth auth = Auth.create(ACCESS_KEY, SECRET_KEY);
        if(auth!=null){
            return  auth.uploadToken(bucketname);
        }else {
            return  null;
        }
    }
}
