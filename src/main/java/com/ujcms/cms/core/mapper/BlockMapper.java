package com.ujcms.cms.core.mapper;

import com.ujcms.cms.core.domain.Block;
import com.ujcms.commons.query.QueryInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 区块 Mapper
 *
 * @author PONY
 */
@Mapper
@Repository
public interface BlockMapper {
    /**
     * 插入数据
     *
     * @param bean 实体对象
     * @return 插入条数
     */
    int insert(Block bean);

    /**
     * 更新数据
     *
     * @param bean 实体对象
     * @return 更新条数
     */
    int update(Block bean);

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
    Block select(Integer id);

    /**
     * 根据查询条件获取列表
     *
     * @param queryInfo 查询条件
     * @return 数据列表
     */
    List<Block> selectAll(@Nullable @Param("queryInfo") QueryInfo queryInfo);

    /**
     * 根据别名和站点ID计数
     *
     * @param alias  别名
     * @param siteId 站点ID
     * @return 数据条数
     */
    int existsByAlias(@Param("alias") String alias, @Param("siteId") @Nullable Integer siteId);

    /**
     * 根据 站点ID 删除数据
     *
     * @param siteId 站点ID
     * @return 删除条数
     */
    int deleteBySiteId(Integer siteId);
}