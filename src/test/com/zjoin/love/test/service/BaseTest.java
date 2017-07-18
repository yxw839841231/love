/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.test.service;

import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created on 2017/7/6.
 *
 * @auther 地瓜
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/spring/spring-*.xml" })
public class BaseTest  extends AbstractTransactionalJUnit4SpringContextTests {
    @Before
    public void init(){
        System.out.println("初始化。");
    }
    @After
    public void print(){
        System.out.println("结束方法。");
    }
}
