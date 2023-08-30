package com.ujcms.cms.core.mapper;

import com.ujcms.cms.core.domain.LoginLog;
import com.ujcms.commons.query.QueryInfo;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface LoginLogMapper {
    /**
     * 插入数据
     *
     * @param bean 实体对象
     * @return 插入条数
     */
    int insert(LoginLog bean);

    /**
     * 更新数据
     *
     * @param bean 实体对象
     * @return 更新条数
     */
    int update(LoginLog bean);

    /**
     * 删除数据
     *
     * @param id 主键ID
     * @return 删除条数
     */
    int delete(Integer id);

    /**
     * 根据主键获取数据
     *
     * @param id 主键ID
     * @return 实体对象。没有找到数据，则返回 {@code null}
     */
    @Nullable
    LoginLog select(Integer id);

    /**
     * 根据查询条件获取列表
     *
     * @param queryInfo 查询条件
     * @return 数据列表
     */
    List<LoginLog> selectAll(@Nullable @Param("queryInfo") QueryInfo queryInfo);

    /**
     * 根据用户ID删除数据
     *
     * @param userId 用户ID
     * @return 被删除的数据条数
     */
    int deleteByUserId(Integer userId);
}