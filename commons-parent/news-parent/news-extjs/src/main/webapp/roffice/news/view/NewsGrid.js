/**
 * 用户表格
 * @author majian <br/>
 *         date:2015-7-3
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.view.NewsGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.news.controller.NewsGridController',
        'kalix.roffice.news.store.NewsStore'
    ],
    alias: 'widget.newsGrid',
    xtype: 'newsGridPanel',
    controller: {
        type: 'newsGridController',
        storeId: 'newsStore',
        cfgForm: 'kalix.roffice.news.view.NewsWindow',
        cfgViewForm: 'kalix.roffice.news.view.NewsViewWindow',
        cfgModel: 'kalix.roffice.news.model.NewsModel'
    },
    store: {
        type: 'newsStore'
    },
    columns: {
        items: [
        /*{
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            align: 'center'
         },*/
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
            //width: 40
        }, {
            text: '标题',
            dataIndex: 'title',
                flex: 1
            }, {
            text: '发布人',
            dataIndex: 'publishPeople',
                flex: 1
        }, {
            text: '发布时间',
            dataIndex: 'publishDate',
            xtype: 'datecolumn',      // the column type
                flex: 1,
            formatter: 'date("Y-m-d H:i:s")'
        },
        {
            xtype: 'securityGridColumnRUD',
            flex: 1,
            permissions: [
                'roffice:commonsModule:newsMenu:view',
                'roffice:commonsModule:newsMenu:edit',
                'roffice:commonsModule:newsMenu:delete'
            ]
        }]
    },
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>内容:</b> {content}</p>',
            {
                formatChange: function (v) {
                    var color = v >= 0 ? 'green' : 'red';
                    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                }
            })
    }],
    collapsible: true,
    animCollapse: true,

    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:commonsModule:newsMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }]
    }
});
