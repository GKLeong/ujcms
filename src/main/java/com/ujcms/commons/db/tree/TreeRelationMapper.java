package com.ujcms.commons.db.tree;

import org.apache.ibatis.annotations.Param;

/**
 * 树形关系 Mapper
 *
 * @author PONY
 */
public interface TreeRelationMapper<T> {
    /**
     * 插入数据
     *
     * @param ancestorId   祖先ID
     * @param descendantId 后代ID
     * @return 插入条数
     */
    int save(@Param("ancestorId") Long ancestorId, @Param("descendantId") Long descendantId);

    /**
     * 删除数据
     *
     * @param ancestorId   祖先ID
     * @param descendantId 后代ID
     * @return 删除条数
     */
    int delete(@Param("ancestorId") Long ancestorId, @Param("descendantId") Long descendantId);

    /**
     * 删除数据
     *
     * @param ancestorId 祖先ID
     * @return 删除条数
     */
    int deleteByAncestorId(Long ancestorId);

    /**
     * 移出数据
     *
     * @param id 待移出的ID
     * @return 删除条数
     */
    int move(Long id);

    /**
     * 移入数据
     *
     * @param id       待移入的ID
     * @param parentId 移动到父节点ID
     * @return 插入条数
     */
    int append(@Param("id") Long id, @Param("parentId") Long parentId);

    /**
     * 加入数据
     *
     * @param id       待加入的ID
     * @param parentId 加入到父节点ID
     * @return 插入条数
     */
    int add(@Param("id") Long id, @Param("parentId") Long parentId);
}
