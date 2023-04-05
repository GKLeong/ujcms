package com.ujcms.cms.core.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ujcms.cms.core.domain.base.RoleBase;
import com.ujcms.cms.core.domain.base.UserBase;
import com.ujcms.util.misc.BaseNum;
import io.swagger.v3.oas.annotations.media.Schema;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.Duration;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 用户实体类
 *
 * @author PONY
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(value = {"password", "handler"}, allowSetters = true)
public class User extends UserBase implements UserDetails, Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 字符串ID。用户个人主页地址使用字符串ID，不使用规则的整数，避免ID被探测
     */
    @Schema(description = "字符串ID。用户个人主页地址使用字符串ID，不使用规则的整数，避免ID被探测")
    public String getStringId() {
        return BaseNum.base36().fromReverseInt(getId());
    }

    /**
     * 个人主页
     */
    @Schema(description = "个人主页")
    public String getHomepage() {
        return "/users/" + getStringId();
    }

    @Schema(description = "大头像")
    @Nullable
    public String getLargeAvatar() {
        return getOtherSizeAvatar(Config.Register.AVATAR_LARGE);
    }

    @Schema(description = "中头像")
    @Nullable
    public String getMediumAvatar() {
        return getOtherSizeAvatar(Config.Register.AVATAR_MEDIUM);
    }

    @Schema(description = "小头像")
    @Nullable
    public String getSmallAvatar() {
        return getOtherSizeAvatar(Config.Register.AVATAR_SMALL);
    }

    @JsonIgnore
    public List<String> getAvatarList() {
        if (StringUtils.isBlank(getAvatar())) {
            return Collections.emptyList();
        }
        return Arrays.asList(getAvatar(), getLargeAvatar(), getMediumAvatar(), getSmallAvatar());
    }

    @Nullable
    private String getOtherSizeAvatar(String size) {
        if (getAvatar() == null) {
            return null;
        }
        String ext = FilenameUtils.getExtension(getAvatar());
        return getAvatar() + size + ext;
    }

    /**
     * 是否登录尝试过多。登录错误次数超过8次，且在半小时内。
     */
    @JsonIgnore
    public boolean isExcessiveAttempts(int maxAttempts, int lockMinutes) {
        // maxAttempts 为 0 则不限制
        return maxAttempts > 0 && getExt().getErrorCount() >= maxAttempts
                && Duration.between(getErrorDate(), OffsetDateTime.now()).toMinutes() <= lockMinutes;
    }

    /**
     * 密码是否过期
     *
     * @param maxDays 密码最长使用天数
     */
    @JsonIgnore
    public boolean isPasswordExpired(int maxDays) {
        // maxDays 为 0 则不过期
        return maxDays > 0 && getPasswordRemainingDays(maxDays) < 0;
    }

    /**
     * 是否设置密码（通过第三方注册的用户可能没有设置密码）
     */
    @Schema(description = "密码是否存在")
    public boolean isPasswordExist() {
        return !"0".equalsIgnoreCase(getPassword());
    }

    /**
     * 密码剩余天数
     *
     * @param maxDay 密码最长使用天数
     */
    @JsonIgnore
    public int getPasswordRemainingDays(int maxDay) {
        return maxDay - getPasswordDays();
    }

    /**
     * 密码使用天数
     */
    @JsonIgnore
    public int getPasswordDays() {
        return (int) Duration.between(getPasswordModified(), OffsetDateTime.now()).toDays();
    }

    /**
     * 获取权限列表
     */
    @JsonIgnore
    public List<String> getPermissions() {
        String permission = getRoleList().stream().map(RoleBase::getPermission)
                .filter(Objects::nonNull).collect(Collectors.joining(","));
        List<String> list = Stream.of(StringUtils.split(permission, ",")).distinct().collect(Collectors.toList());
        // 拥有后台角色，则授予后台通用权限
        if (!getRoleList().isEmpty()) {
            list.add(Role.PERMISSION_BACKEND);
        }
        // 超级管理员，授予所有权限
        if (hasAllPermission()) {
            list.add("*");
        }
        return list;
    }

    /**
     * 获取授权权限
     */
    @JsonIgnore
    public List<String> getGrantPermissions() {
        String permission = getRoleList().stream().map(RoleBase::getGrantPermission)
                .filter(Objects::nonNull).collect(Collectors.joining(","));
        List<String> list = Stream.of(StringUtils.split(permission, ",")).distinct().collect(Collectors.toList());
        // 超级管理员，授予所有权限
        if (hasAllGrantPermission()) {
            list.add("*");
        }
        return list;
    }

    /**
     * 是否拥有全局数据权限
     */
    @JsonIgnore
    public boolean hasGlobalPermission() {
        if (isRoot()) {
            return true;
        }
        for (Role role : getRoleList()) {
            if (role.getGlobalPermission()) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否拥有所有权限
     */
    @JsonIgnore
    public boolean hasAllPermission() {
        if (isRoot()) {
            return true;
        }
        for (Role role : getRoleList()) {
            if (role.getAllPermission()) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否拥有所有授权权限
     */
    @JsonIgnore
    public boolean hasAllGrantPermission() {
        if (isRoot()) {
            return true;
        }
        for (Role role : getRoleList()) {
            if (role.getAllGrantPermission()) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否拥有所有文章数据权限
     */
    @JsonIgnore
    public boolean hasAllArticlePermission() {
        if (isRoot()) {
            return true;
        }
        for (Role role : getRoleList()) {
            if (role.getAllArticlePermission()) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否拥有所有栏目数据权限
     */
    @JsonIgnore
    public boolean hasAllChannelPermission() {
        if (isRoot()) {
            return true;
        }
        for (Role role : getRoleList()) {
            if (role.getAllChannelPermission()) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否拥有所有文章的浏览权限
     */
    @JsonIgnore
    public boolean hasAllAccessPermission() {
        if (isRoot()) {
            return true;
        }
        return getGroup().getAllAccessPermission();
    }

    @JsonIgnore
    public List<Integer> fetchRoleIds() {
        return getRoleList().stream().map(Role::getId).collect(Collectors.toList());
    }

    @JsonIgnore
    public short getDataScope() {
        if (isRoot()) {
            return Role.DATA_SCOPE_ALL;
        }
        short dataScope = Role.DATA_SCOPE_SELF;
        for (Role role : getRoleList()) {
            if (role.getDataScope() < dataScope) {
                dataScope = role.getDataScope();
            }
        }
        return dataScope;
    }

    @JsonIgnore
    public List<String> getHistoryPasswordList() {
        String whole = getHistoryPassword();
        if (StringUtils.isBlank(whole)) {
            return new ArrayList<>();
        }
        return new ArrayList<>(Arrays.asList(whole.split(",")));
    }

    @JsonIgnore
    public List<String> getHistoryPasswordList(int maxHistory) {
        if (maxHistory <= 0) {
            return new ArrayList<>();
        }
        List<String> list = getHistoryPasswordList();
        int size = list.size();
        if (size > maxHistory) {
            return list.subList(size - maxHistory, size);
        }
        return list;
    }

    public void setHistoryPasswordList(List<String> passwordList) {
        if (passwordList.isEmpty()) {
            setHistoryPassword(null);
            return;
        }
        setHistoryPassword(String.join(",", passwordList));
    }

    public void addHistoryPassword(String password) {
        List<String> list = getHistoryPasswordList();
        list.add(password);
        int size = list.size();
        if (size > PASSWORD_MAX_HISTORY) {
            list = list.subList(size - PASSWORD_MAX_HISTORY, PASSWORD_MAX_HISTORY);
        }
        setHistoryPasswordList(list);
    }

    /**
     * 是否超级管理员。ID为1的用户为超级管理员
     */
    @Schema(description = "是否超级管理员。ID为1的用户为超级管理员")
    public boolean isRoot() {
        return getId() == 1;
    }

    /**
     * 是否审计对象。系统管理员和安全管理员为审计对象，操作日志由审计管理员审计
     */
    @JsonIgnore
    public boolean isAuditObject() {
        return getType().equals(TYPE_SYSTEM) || getType().equals(TYPE_SECURITY);
    }

    /**
     * 是否未激活
     */
    @JsonIgnore
    public boolean isInactivated() {
        return getStatus() == STATUS_INACTIVATED;
    }

    /**
     * 是否锁定
     */
    @JsonIgnore
    public boolean isLocked() {
        return getStatus() == STATUS_LOCKED;
    }

    /**
     * 是否注销
     */
    @JsonIgnore
    public boolean isCancelled() {
        return getStatus() == STATUS_CANCELLED;
    }

    /**
     * 是否正常状态
     */
    @Schema(description = "是否正常状态")
    @Override
    public boolean isEnabled() {
        return getStatus() == STATUS_ENABLED;
    }

    /**
     * 是否禁用。非正常状态，就是禁用。
     */
    @JsonIgnore
    public boolean isDisabled() {
        return !isEnabled();
    }
    // region UserDetails

    @JsonIgnore
    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        return getPermissions().stream().map(permission ->
                new SimpleGrantedAuthority(permission)).collect(Collectors.toList());
    }

    /**
     * 是否未锁定
     */
    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return !isLocked();
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    // endregion

    // region TempFields
    /**
     * 角色ID列表。用于获取前台提交的数据。
     */
    private List<Integer> roleIds = new ArrayList<>();

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    public List<Integer> getRoleIds() {
        return roleIds;
    }

    @Schema(description = "角色ID列表")
    public void setRoleIds(List<Integer> roleIds) {
        this.roleIds = roleIds;
    }
    // endregion

    // region Associations
    /**
     * 用户扩展对象
     */
    @JsonIgnore
    private UserExt ext = new UserExt();
    /**
     * 用户组
     */
    @JsonIncludeProperties({"id", "name"})
    private Group group = new Group();
    /**
     * 组织
     */
    @JsonIncludeProperties({"id", "name"})
    private Org org = new Org();
    /**
     * 角色列表
     */
    @JsonIncludeProperties({"id", "name"})
    private List<Role> roleList = new ArrayList<>();

    public UserExt getExt() {
        return ext;
    }

    public void setExt(UserExt ext) {
        this.ext = ext;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Org getOrg() {
        return org;
    }

    public void setOrg(Org org) {
        this.org = org;
    }

    public List<Role> getRoleList() {
        return roleList;
    }

    public void setRoleList(List<Role> roleList) {
        this.roleList = roleList;
    }
    // endregion

    // region UserExt

    @Schema(description = "真实姓名")
    @Nullable
    public String getRealName() {
        return getExt().getRealName();
    }

    public void setRealName(@Nullable String realName) {
        getExt().setRealName(realName);
    }

    @Schema(description = "性别(m:男,f:女,n:保密)")
    public String getGender() {
        return getExt().getGender();
    }

    public void setGender(String gender) {
        getExt().setGender(gender);
    }

    @Schema(description = "出生日期")
    @Nullable
    public OffsetDateTime getBirthday() {
        return getExt().getBirthday();
    }

    public void setBirthday(@Nullable OffsetDateTime birthday) {
        getExt().setBirthday(birthday);
    }

    @Length(max = 200)
    @Nullable
    @Schema(description = "居住地")
    public String getLocation() {
        return getExt().getLocation();
    }

    public void setLocation(@Nullable String location) {
        getExt().setLocation(location);
    }

    @Length(max = 1000)
    @Nullable
    @Schema(description = "自我介绍")
    public String getBio() {
        return getExt().getBio();
    }

    public void setBio(@Nullable String bio) {
        getExt().setBio(bio);
    }

    @Schema(description = "创建日期")
    public OffsetDateTime getCreated() {
        return getExt().getCreated();
    }

    public void setCreated(OffsetDateTime created) {
        getExt().setCreated(created);
    }

    @JsonIgnore
    @Nullable
    public String getHistoryPassword() {
        return getExt().getHistoryPassword();
    }

    public void setHistoryPassword(@Nullable String historyPassword) {
        getExt().setHistoryPassword(historyPassword);
    }

    @NotNull
    @Schema(description = "最后登录日期")
    public OffsetDateTime getLoginDate() {
        return getExt().getLoginDate();
    }

    public void setLoginDate(OffsetDateTime loginDate) {
        getExt().setLoginDate(loginDate);
    }

    @Length(max = 45)
    @NotNull
    @Schema(description = "最后登录IP")
    public String getLoginIp() {
        return getExt().getLoginIp();
    }

    public void setLoginIp(String loginIp) {
        getExt().setLoginIp(loginIp);
    }

    @NotNull
    @Schema(description = "登录次数")
    public int getLoginCount() {
        return getExt().getLoginCount();
    }

    public void setLoginCount(int loginCount) {
        getExt().setLoginCount(loginCount);
    }

    @JsonIgnore
    public OffsetDateTime getErrorDate() {
        return getExt().getErrorDate();
    }

    public void setErrorDate(OffsetDateTime errorDate) {
        getExt().setErrorDate(errorDate);
    }

    @JsonIgnore
    public int getErrorCount() {
        return getExt().getErrorCount();
    }

    public void setErrorCount(int errorCount) {
        getExt().setErrorCount(errorCount);
    }
    // endregion

    // region StaticField
    /**
     * 密码最大历史记录
     */
    public static final int PASSWORD_MAX_HISTORY = 24;
    /**
     * 用户状态：正常
     */
    public static final short STATUS_ENABLED = 0;
    /**
     * 用户状态：未激活
     */
    public static final short STATUS_INACTIVATED = 1;
    /**
     * 用户状态：已锁定
     */
    public static final short STATUS_LOCKED = 2;
    /**
     * 用户状态：已注销
     */
    public static final short STATUS_CANCELLED = 3;

    /**
     * 用户类型：系统管理员
     */
    public static final short TYPE_SYSTEM = 1;
    /**
     * 用户类型：安全管理员
     */
    public static final short TYPE_SECURITY = 2;
    /**
     * 用户类型：审计管理员
     */
    public static final short TYPE_AUDIT = 3;
    /**
     * 用户类型：常规管理员
     */
    public static final short TYPE_NORMAL = 4;
    /**
     * 用户类型：前台会员
     */
    public static final short TYPE_MEMBER = 5;

    /**
     * 需排除的字段。不能直接修改
     */
    public static String[] EXCLUDE_FIELDS = {"password", "status",
            "created", "loginDate", "loginIp", "loginCount", "errorDate", "errorCount"};
    /**
     * 权限字段
     */
    public static String[] PERMISSION_FIELDS = {"rank"};

    /**
     * 匿名用户ID
     */
    public static final Integer ANONYMOUS_ID = 0;
    // endregion
}
