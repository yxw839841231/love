/**
 * 美窝云
 * APP服务端
 * 版权所有 2016~ 2017 杭州美窝科技有限公司
 */
package com.zjoin.love.test.service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;

/**
 * Created on 2017/7/19.
 *
 * @auther 地瓜
 */
public class CreateImage {

    public static void main(String[] args) throws Exception {
        createImage("请A1003到3号窗口", new Font("宋体", Font.BOLD, 30), new File(
                "c:/a.png"), 4096, 64);
        createImage("请A1002到2号窗口", new Font("黑体", Font.BOLD, 35), new File(
                "c:/a1.png"), 4096, 64);
        createImage("请A1001到1号窗口", new Font("黑体", Font.PLAIN, 40), new File(
                "c:/a2.png"), 4096, 64);
    }

    // 根据str,font的样式以及输出文件目录
    public static void createImage(String str, Font font, File outFile,
                                   Integer width, Integer height) throws Exception {
        // 创建图片
        BufferedImage image = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_BGR);
        Graphics g = image.getGraphics();
        g.setClip(0, 0, width, height);
        g.setColor(Color.black);
        g.fillRect(0, 0, width, height);// 先用黑色填充整张图片,也就是背景
        g.setColor(Color.red);// 在换成黑色
        g.setFont(font);// 设置画笔字体
        /** 用于获得垂直居中y */
        Rectangle clip = g.getClipBounds();
        FontMetrics fm = g.getFontMetrics(font);
        int ascent = fm.getAscent();
        int descent = fm.getDescent();
        int y = (clip.height - (ascent + descent)) / 2 + ascent;
        for (int i = 0; i < 6; i++) {// 256 340 0 680
            g.drawString(str, i * 680, y);// 画出字符串
        }
        g.dispose();
        ImageIO.write(image, "png", outFile);// 输出png图片
    }
}
