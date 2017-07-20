/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.business.controller;

import com.zjoin.love.ws.base.controller.BaseController;
import com.zjoin.love.ws.base.entity.BaseResult;
import com.zjoin.love.ws.business.service.FriendlinkService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * Created on 2017/7/13.
 *
 * @auther 地瓜
 */
@Controller
@RequestMapping(value = "friendlink" ,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class FriendlinkController extends BaseController{
    @Resource
    private FriendlinkService friendlinkService;



    @RequestMapping("/list")
    @ResponseBody
    public BaseResult list(){
        BaseResult result = new BaseResult();
        try {
            result.setValue(friendlinkService.getAll());
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
