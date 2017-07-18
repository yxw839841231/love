package com.zjoin.love.ws.business.entity;

import javax.persistence.*;

@Table(name = "cqssc")
public class Cqssc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer w;

    private Integer q;

    private Integer b;

    private Integer s;

    private Integer g;

    private Long qh;

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
     * @return w
     */
    public Integer getW() {
        return w;
    }

    /**
     * @param w
     */
    public void setW(Integer w) {
        this.w = w;
    }

    /**
     * @return q
     */
    public Integer getQ() {
        return q;
    }

    /**
     * @param q
     */
    public void setQ(Integer q) {
        this.q = q;
    }

    /**
     * @return b
     */
    public Integer getB() {
        return b;
    }

    /**
     * @param b
     */
    public void setB(Integer b) {
        this.b = b;
    }

    /**
     * @return s
     */
    public Integer getS() {
        return s;
    }

    /**
     * @param s
     */
    public void setS(Integer s) {
        this.s = s;
    }

    /**
     * @return g
     */
    public Integer getG() {
        return g;
    }

    /**
     * @param g
     */
    public void setG(Integer g) {
        this.g = g;
    }

    /**
     * @return qh
     */
    public Long getQh() {
        return qh;
    }

    /**
     * @param qh
     */
    public void setQh(Long qh) {
        this.qh = qh;
    }
}