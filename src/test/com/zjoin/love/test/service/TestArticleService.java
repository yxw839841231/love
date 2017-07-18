/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.test.service;

import com.zjoin.love.ws.business.entity.Article;
import com.zjoin.love.ws.business.service.ArticleService;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * 文章发布测试类
 * Created on 2017/7/1.
 * @auther 地瓜
 */
public class TestArticleService extends BaseTest {

    @Autowired
    private ArticleService articleService;

    @Test
    public void testAddArticle(){
        Article article = mock(Article.class);
        when(article.getAuthor()).thenReturn("易天下");
        when(article.getId()).thenReturn(10L);
        when(article.getContent()).thenReturn("文本内容");
        when(article.getCreatetime()).thenReturn(new Date());
        when(article.getTitle()).thenReturn("测试文章");
        articleService.insert(article);
        //Assert.assertTrue(articleService.insert(article)>0);
    }

    @Test
    public void testSelectArticle(){
        List<Article> list = articleService.getAll();
        for(Article article :list){
            System.out.println(article.toString());
        }
    }

    @Test
    public void testDeleteArticle(){
        Assert.assertTrue(articleService.delete(15L)>0);
    }

}
