/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.business.controller;

import com.zjoin.love.ws.base.entity.BaseResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 2017/6/13.
 *
 * @auther 地瓜
 */
@RequestMapping("back")
@Controller
public class BackController {

    @RequestMapping("")
    public String main(){
        return "/back/index";
    }

    @RequestMapping("test")
    public String test(){
        return "/back/index";
    }

    @RequestMapping("number")
    @ResponseBody
    public BaseResult getNumber(Integer mod){
        BaseResult result = new BaseResult();
        List<String> list = new ArrayList<String>();
        for(int i=0;i<100000;i++){
            if(i%3==mod){
                list.add(getString(i));
            }
        }
        result.setValue(list);
        return result;
    }

    private  String getString(int i){
        if(i>9999){
            return i+"";
        }else if(i>999 && i<10000){
            return "0"+i;
        }else if(i>99 && i<1000){
            return "00"+i;
        }else if(i>9 && i<100){
            return "000"+i;
        }else if(i<10){
            return "0000"+i;
        }
        return "--?--";
    }


    public static void main(String[] args) {
        //6*5
    }
}
