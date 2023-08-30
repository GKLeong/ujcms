package com.ujcms.cms.core.service.args;

import com.ujcms.commons.query.BaseQueryArgs;
import org.springframework.lang.Nullable;

import java.util.HashMap;
import java.util.Map;

/**
 * 组织查询参数
 *
 * @author PONY
 */
public class OrgArgs extends BaseQueryArgs {
    @Nullable
    private Integer ancestorId;

    public OrgArgs ancestorId(@Nullable Integer ancestorId) {
        if (ancestorId != null) {
            this.ancestorId = ancestorId;
        }
        return this;
    }

    public OrgArgs parentId(@Nullable Integer parentId) {
        if (parentId != null) {
            queryMap.put("EQ_parentId_Int", parentId);
        }
        return this;
    }

    public static OrgArgs of() {
        return of(new HashMap<>(16));
    }

    public static OrgArgs of(Map<String, Object> queryMap) {
        return new OrgArgs(queryMap);
    }

    private OrgArgs(Map<String, Object> queryMap) {
        super(queryMap);
    }

    @Nullable
    public Integer getAncestorId() {
        return ancestorId;
    }
}
