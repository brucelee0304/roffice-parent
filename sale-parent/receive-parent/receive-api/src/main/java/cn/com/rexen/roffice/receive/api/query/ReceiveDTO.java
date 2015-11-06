package cn.com.rexen.roffice.receive.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

/**
 * Created by sunlf on 2015/11/5.
 */
public class ReceiveDTO extends QueryDTO {
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date beginDate;//回款日期

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date endDate;//回款日期

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}