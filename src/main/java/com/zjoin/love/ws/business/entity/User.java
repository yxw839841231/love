package com.zjoin.love.ws.business.entity;

import javax.persistence.*;

@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 用户名
     */
    private String loginname;

    /**
     * 密码
     */
    private String loginpass;

    /**
     * 昵称
     */
    private String nickname;

    /**
     * 是否有效
     */
    private Boolean isactive;

    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取用户名
     *
     * @return loginname - 用户名
     */
    public String getLoginname() {
        return loginname;
    }

    /**
     * 设置用户名
     *
     * @param loginname 用户名
     */
    public void setLoginname(String loginname) {
        this.loginname = loginname;
    }

    /**
     * 获取密码
     *
     * @return loginpass - 密码
     */
    public String getLoginpass() {
        return loginpass;
    }

    /**
     * 设置密码
     *
     * @param loginpass 密码
     */
    public void setLoginpass(String loginpass) {
        this.loginpass = loginpass;
    }

    /**
     * 获取昵称
     *
     * @return nickname - 昵称
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * 设置昵称
     *
     * @param nickname 昵称
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    /**
     * 获取是否有效
     *
     * @return isactive - 是否有效
     */
    public Boolean getIsactive() {
        return isactive;
    }

    /**
     * 设置是否有效
     *
     * @param isactive 是否有效
     */
    public void setIsactive(Boolean isactive) {
        this.isactive = isactive;
    }
}