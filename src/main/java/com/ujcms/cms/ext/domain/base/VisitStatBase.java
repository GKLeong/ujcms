package com.ujcms.cms.ext.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class VisitStatBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "visit_stat";

    /**
     * 访问_统计ID
     */
    @NotNull
    @Schema(description="访问_统计ID")
    private Long id = 0L;

    /**
     * 站点ID
     */
    @NotNull
    @Schema(description="站点ID")
    private Long siteId = 0L;

    /**
     * 名称
     */
    @Length(max = 100)
    @NotNull
    @Schema(description="名称")
    private String name = "";

    /**
     * 访问量
     */
    @NotNull
    @Schema(description="访问量")
    private Long pvCount = 0L;

    /**
     * 访客数
     */
    @NotNull
    @Schema(description="访客数")
    private Long uvCount = 0L;

    /**
     * IP数
     */
    @NotNull
    @Schema(description="IP数")
    private Long ipCount = 0L;

    /**
     * 新访客数
     */
    @NotNull
    @Schema(description="新访客数")
    private Long nvCount = 0L;

    /**
     * 跳出数
     */
    @NotNull
    @Schema(description="跳出数")
    private Integer bounceCount = 0;

    /**
     * 访问时长
     */
    @NotNull
    @Schema(description="访问时长")
    private Integer duration = 0;

    /**
     * 统计日期(yyyyMMdd)
     */
    @Length(max = 8)
    @NotNull
    @Schema(description="统计日期(yyyyMMdd)")
    private String dateString = "";

    /**
     * 统计类型(1:新老客户,2:来源,3:国家,4:省份,5:设备,6:操作系统,7:浏览器,8:来源类型)
     */
    @NotNull
    @Schema(description="统计类型(1:新老客户,2:来源,3:国家,4:省份,5:设备,6:操作系统,7:浏览器,8:来源类型)")
    private Short type = 1;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSiteId() {
        return siteId;
    }

    public void setSiteId(Long siteId) {
        this.siteId = siteId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPvCount() {
        return pvCount;
    }

    public void setPvCount(Long pvCount) {
        this.pvCount = pvCount;
    }

    public Long getUvCount() {
        return uvCount;
    }

    public void setUvCount(Long uvCount) {
        this.uvCount = uvCount;
    }

    public Long getIpCount() {
        return ipCount;
    }

    public void setIpCount(Long ipCount) {
        this.ipCount = ipCount;
    }

    public Long getNvCount() {
        return nvCount;
    }

    public void setNvCount(Long nvCount) {
        this.nvCount = nvCount;
    }

    public Integer getBounceCount() {
        return bounceCount;
    }

    public void setBounceCount(Integer bounceCount) {
        this.bounceCount = bounceCount;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getDateString() {
        return dateString;
    }

    public void setDateString(String dateString) {
        this.dateString = dateString;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }
}