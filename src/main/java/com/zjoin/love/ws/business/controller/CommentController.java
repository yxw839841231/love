/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.business.controller;

import com.zjoin.love.ws.base.controller.BaseController;
import com.zjoin.love.ws.base.entity.BaseResult;
import com.zjoin.love.ws.business.service.CommentService;
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
@RequestMapping(value = "comment" ,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class CommentController extends BaseController{
    @Resource
    private CommentService commentService;



    @RequestMapping("/list")
    @ResponseBody
    public BaseResult list(){
        BaseResult result = new BaseResult();
        try {
            result.setValue(commentService.getAll());
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping("/getComments")
    @ResponseBody
    public BaseResult getComments(){
        BaseResult result = new BaseResult();
        result.setValue(52);
        return result;
    }
}
