package com.zjoin.love.ws.base.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.entity.Example;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.List;

/**
 * Created by digua on 2016/9/6.
 */
public abstract class BaseService<T> {
    @Autowired
    protected Mapper<T> mapper;

    /**
     * 保存一个实体，null的属性不会保存，会使用数据库默认值
     *
     * @param entity
     * @return
     */
    @Transactional
    public int insert(T entity) {
        return mapper.insertSelective(entity);
    }

    /**
     * 保存一个实体，null的属性也会保存，不会使用数据库默认值
     *
     * @param entity
     * @return
     */
    @Transactional
    public int insertNull(T entity) {
        return mapper.insert(entity);
    }

    /**
     * 根据主键更新属性不为null的值
     *
     * @param entity
     * @return
     */
    @Transactional
    public int update(T entity) {
        return mapper.updateByPrimaryKeySelective(entity);
    }

    /**
     * 根据主键更新实体全部字段，null值会被更新
     *
     * @param entity
     * @return
     */
    @Transactional
    public int updateNull(T entity) {
        return mapper.updateByPrimaryKey(entity);
    }


    /**
     * 根据主键字段进行查询，方法参数必须包含完整的主键属性，查询条件使用等号
     *
     * @param id
     * @return
     */
    public T getById(Long id) {
        return mapper.selectByPrimaryKey(id);
    }

    /**
     * 根据实体中的属性值进行查询，查询条件使用等号
     *
     * @param entity
     */
    public List<T> getListByEntity(T entity) {
        return mapper.select(entity);
    }

    /**
     * 根据实体中的属性进行查询，只能有一个返回值，有多个结果是抛出异常，查询条件使用等号
     *
     * @param entity
     * @return
     */
    public T getOneByEntity(T entity) {
        return mapper.selectOne(entity);
    }

    /**
     * 查询全部结果，select(null)方法能达到同样的效果
     *
     * @return
     */
    public List<T> getAll() {
        return mapper.selectAll();
    }


    /**
     * 根据example 条件查询
     *
     * @param example
     * @return
     */
    public List<T> getByExample(Example example) {
        return mapper.selectByExample(example);
    }

    /**
     * 根据example 条件查询
     *
     * @param example
     * @return
     */
    public int getCountByExample(Example example) {
        return mapper.selectCountByExample(example);
    }


    /**
     * 根据主键删除
     * @param o
     * @return
     */
    @Transactional
    public int delete(Object o) {
        return mapper.deleteByPrimaryKey(o);
    }

    /**
     * 根据实体删除
     * @param entity
     * @return
     */
    @Transactional
    public int deleteByEntity(T entity) {
        return mapper.delete(entity);
    }


    public List<T> getList(T model) throws NoSuchMethodException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        Example example = new Example(model.getClass());
        Field[] field = model.getClass().getDeclaredFields();
        Example.Criteria ec = example.createCriteria();

        for (int j = 0; j < field.length; j++) {     //遍历所有属性
            String name = field[j].getName();    //获取属性的名字
            String type = field[j].getGenericType().toString();    //获取属性的类型
            if (type.equals("class java.lang.String")) {   //如果type是类类型，则前面包含"class "，后面跟类名
                Method m = model.getClass().getMethod("get" + captureName(name));
                String value = (String) m.invoke(model);    //调用getter方法获取属性值
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.lang.Integer")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Integer value = (Integer) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.lang.Long")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Long value = (Long) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.lang.Short")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Short value = (Short) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.lang.Double")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Double value = (Double) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.lang.Boolean")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Boolean value = (Boolean) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            } else if (type.equals("class java.util.Date")) {
                Method m = model.getClass().getMethod("get" + captureName(name));
                Date value = (Date) m.invoke(model);
                if (value != null) {
                    ec.andEqualTo(name, value);
                }
            }
        }
        return mapper.selectByExample(example);
    }

    private static String captureName(String name) {
        name = name.substring(0, 1).toUpperCase() + name.substring(1);
        return name;

    }
}
