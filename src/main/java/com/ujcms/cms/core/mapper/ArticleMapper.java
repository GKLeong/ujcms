package com.ujcms.cms.core.mapper;

import com.ujcms.cms.core.domain.Article;
import com.ujcms.commons.db.order.OrderEntityMapper;
import com.ujcms.commons.query.QueryInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import java.time.OffsetDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * 文章 Mapper
 *
 * @author PONY
 */
@Mapper
@Repository
public interface ArticleMapper extends OrderEntityMapper {
    /**
     * 根据主键获取引用对象（不包括关联对象属性）
     *
     * @param id 主键ID
     * @return 实体对象。没有找到数据，则返回 {@code null}
     */
    @Nullable
    Article selectRefer(Integer id);

    /**
     * 插入数据
     *
     * @param bean 实体对象
     * @return 插入条数
     */
    int insert(Article bean);

    /**
     * 更新数据
     *
     * @param bean 实体对象
     * @return 更新条数
     */
    int update(Article bean);

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
    @Override
    Article select(Integer id);

    /**
     * 根据查询条件获取列表
     *
     * @param queryInfo          查询条件
     * @param customsCondition   自定义字段查询条件
     * @param orgAncestorId      组织ID
     * @param channelAncestorIds 栏目ID列表
     * @param roleIds            角色ID列表
     * @return 数据列表
     */
    List<Article> selectAll(@Nullable @Param("queryInfo") QueryInfo queryInfo,
                            @Nullable @Param("customsCondition") List<QueryInfo.WhereCondition> customsCondition,
                            @Nullable @Param("orgAncestorId") Integer orgAncestorId,
                            @Nullable @Param("channelAncestorIds") Collection<Integer> channelAncestorIds,
                            @Nullable @Param("roleIds") Collection<Integer> roleIds);

    /**
     * 根据 id 列表查询
     *
     * @param ids id 列表
     * @return 数据列表
     */
    List<Article> listByIds(@Param("ids") Iterable<Integer> ids);

    /**
     * 根据站点ID获取文章列表用于sitemap。由于sitemap获取的数据量较大，只查询必须字段。
     *
     * @param siteId 站点ID
     * @param minId  最小的文章ID。从此文章ID开始获取数据。
     * @return 数据列表
     */
    List<Article> listBySiteIdForSitemap(Integer siteId, @Nullable Integer minId);

    /**
     * 根据栏目ID查询文章列表
     *
     * @param channelId 栏目ID
     * @return 文章列表
     */
    List<Article> listByChannelId(@Param("channelId") Integer channelId);

    /**
     * 根据源文章ID查询文章列表
     *
     * @param srcId 源文章ID
     * @return 文章列表
     */
    List<Article> listBySrcId(@Param("srcId") Integer srcId);

    /**
     * 查询下一条文章
     *
     * @param id        文章ID
     * @param order     文章排序值
     * @param channelId 栏目ID
     * @param status    状态
     * @return 下一条文章
     */
    List<Article> findNext(@Param("id") Integer id, @Param("order") Long order,
                           @Param("channelId") Integer channelId, @Param("status") Collection<Short> status);

    /**
     * 查询上一条文章
     *
     * @param id        文章ID
     * @param order     文章排序值
     * @param channelId 栏目ID
     * @param status    状态
     * @return 上一条文章
     */
    List<Article> findPrev(@Param("id") Integer id, @Param("order") Long order,
                           @Param("channelId") Integer channelId, @Param("status") Collection<Short> status);

    /**
     * 根据 栏目ID 查询文章数量
     *
     * @param channelId 栏目ID
     * @return 文章数量
     */
    int existsByChannelId(@Param("channelId") Integer channelId);

    /**
     * 根据 用户ID 查询文章是否存在
     *
     * @param userId 用户ID
     * @return 文章是否存在。0代表不存在，1代表存在
     */
    int existsByUserId(Integer userId);

    /**
     * 根据 站点ID 查询文章数量
     *
     * @param siteId 用户ID
     * @param status 文章状态
     * @return 文章数量
     */
    int countBySiteId(@Param("siteId") Integer siteId, @Param("status") Collection<Short> status);

    /**
     * 统计文章数量
     *
     * @param siteId      站点ID
     * @param publishDate 发布日期
     * @param status      状态
     * @return 文章数量
     */
    int countByPublishDate(@Param("siteId") Integer siteId, @Param("publishDate") @Nullable OffsetDateTime publishDate,
                           @Param("status") Collection<Short> status);

    /**
     * 查询最大的ID值
     *
     * @param siteId 用户ID
     * @param status 文章状态
     * @return 最大的ID值
     */
    Map<String, Object> statForSitemap(@Param("siteId") Integer siteId, @Param("status") Collection<Short> status);

    /**
     * 更新文章修改人员
     *
     * @param modifiedUserId 修改用户ID
     * @return 被更新的条数
     */
    int updateModifiedUser(Integer modifiedUserId);

    /**
     * 更新置顶日期。所有已到期的置顶文章，将置顶设置成`0`，并将置顶日期设置为`null`
     *
     * @param now 当前时间
     * @return 被更新的条数
     */
    int updateStickyDate(OffsetDateTime now);

    /**
     * 更新文章的上线状态。状态为`ready`，并且已到上线日期的文章，更新为`published`
     *
     * @param now       当前时间
     * @param ready     待发布状态码
     * @param published 已发布状态码
     * @return 被更新的条数
     */
    int updateOnlineStatus(@Param("now") OffsetDateTime now,
                           @Param("ready") short ready, @Param("published") short published);

    /**
     * 更新文章的上线状态。状态为`ready`，并且已到上线日期的文章，更新为`published`
     *
     * @param now     当前时间
     * @param normals 已发布和已归档状态码
     * @param offline 已下线状态码
     * @return 被更新的条数
     */
    int updateOfflineStatus(@Param("now") OffsetDateTime now,
                            @Param("normals") Collection<Short> normals, @Param("offline") short offline);

    /**
     * 根据栏目ID删除数据
     *
     * @param channelId 栏目ID
     * @return 被删除的数据条数
     */
    int deleteByChannelId(Integer channelId);

    /**
     * 根据站点ID删除数据
     *
     * @param siteId 站点ID
     * @return 被删除的数据条数
     */
    int deleteBySiteId(Integer siteId);

    /**
     * 根据栏目ID获取第一条文章
     *
     * @param channelId 栏目ID
     * @return 第一条文章
     */
    @Nullable
    Article findFirstByChannelId(Integer channelId);
}