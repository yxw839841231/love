/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.ws.business.controller;

import com.zjoin.love.ws.base.controller.BaseController;
import com.zjoin.love.ws.base.entity.BaseResult;
import com.zjoin.love.ws.business.entity.Article;
import com.zjoin.love.ws.business.service.ArticleService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Date;

/**
 * Created on 2017/7/13.
 *
 * @auther 地瓜
 */
@Controller
@RequestMapping(value = "article" ,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class ArticleController extends BaseController{
    @Resource
    private ArticleService articleService;

    @RequestMapping("/add")
    @ResponseBody
    public BaseResult add(Article article){
        BaseResult result = new BaseResult();
        article.setAuthor(getUser().getNickname());
        article.setAuthorid(getUser().getId());
        article.setCreatetime(new Date());
        try {
            articleService.insert(article);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping("/list")
    @ResponseBody
    public BaseResult list(){
        BaseResult result = new BaseResult();
        try {
            result.setValue(articleService.getAll());
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping("/getHotList")
    @ResponseBody
    public BaseResult getHotList(){
        BaseResult result = new BaseResult();
        try {
            result.setValue(articleService.getAll());
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
