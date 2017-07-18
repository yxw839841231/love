/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.base.controller;

import com.zjoin.love.ws.Util.QiNiuUtil;
import com.zjoin.love.ws.base.entity.BaseResult;
import com.zjoin.love.ws.business.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created on 2017/6/5.
 *
 * @auther 地瓜
 */
@RequestMapping("/")
@Controller
public class BaseController {
    @RequestMapping("admin")
    public String index() {
        return "index";
    }
    @RequestMapping("/")
    public String front() {
        System.out.println("----------");
        return "front";
    }

    @RequestMapping("/love")
    public String love() {
        return "love";
    }

    @RequestMapping("/heart")
    public String heart() {
        return "heart";
    }

    @RequestMapping("/leaves")
    public String leaves() {
        return "leaves";
    }

    protected User getUser(){
        User user = new User();
        user.setId(1L);
        user.setNickname("易天下");
        return user;
    }

    @ResponseBody
    @RequestMapping("/api/uptoken")
    public BaseResult uptoken() {
        BaseResult result = new BaseResult();
        result.setValue(QiNiuUtil.getUpToken());
        return result;
    }

}
