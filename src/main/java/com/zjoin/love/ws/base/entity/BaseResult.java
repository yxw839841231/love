package com.zjoin.love.ws.base.entity;


/**
 * Created by digua on 2016/9/7.
 */
public class BaseResult {

    public BaseResult() {
        this.code = 200;
        this.msg = "success";
    }

    public BaseResult(Integer status, String msg) {
        this.code = status;
        this.msg = msg;
    }

    public BaseResult(Integer status, String msg, Object value) {
        this.code = status;
        this.msg = msg;
        this.value = value == null ? "" : value;
    }



    private Integer code;
    private String msg;
    private Object value;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }
}
