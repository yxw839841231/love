/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.test.service;

import java.sql.*;

/**
 * Created on 2017/7/17.
 *
 * @auther 地瓜
 */
public class JDBCTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://127.0.0.1:3306/zjoin?useUnicode=true&characterEncoding=utf-8";
        String username = "root";
        String password = "123456";
        try {
            Connection con = DriverManager.getConnection(url, username, password);
            String sql = "INSERT INTO article  ( id,title,author,authorid,createtime,isaudit,keywords,describle,browsepermission,content ) VALUES( null,'测试','测试',1,'217-02-03',false,'测试','测试',false,'测试' )";
            PreparedStatement pstmt = con.prepareStatement(sql);
            pstmt.execute();

        } catch (SQLException se) {
            System.out.println("数据库连接失败！");
            se.printStackTrace();
        }
    }
}
