/**
 * 用户表格
 * @author majian
 *         date:2015-7-3
 * @version 1.0.0
 */
Ext.define('Kalix.chance.view.ChanceGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Kalix.chance.viewModel.ChanceViewModel',
        'Kalix.chance.controller.ChanceGridController'
    ],
    alias: 'widget.chanceGrid',
    xtype: 'chanceGrid',
    controller: 'chanceGridController',
    viewModel: {
        type: 'chanceViewModel'
    },
    autoLoad: true,
    stripeRows: true,
    manageHeight: true,
    selModel: {selType: 'checkboxmodel', mode: "SIMPLE"},
    columns: [
        {text: '编号', dataIndex: 'id', width: 40},
        {text: '标题', dataIndex: 'text', width: 80},
        {text: '内容', dataIndex: 'content', width: 100},
        {text: '发布人', dataIndex: 'publishPeople', width: 60},
        {
            text: '创建日期', dataIndex: 'publishDate', width: 120, renderer: function (value) {
            var createDate = new Date(value);
            return createDate.format("yyyy-MM-dd hh:mm:ss");
        }
        },
        {
            header: '操作',
            xtype: "actioncolumn",
            width: 60,
            items: [{
                icon: "resources/images/pencil.png",
                tooltip: '修改',
                handler: 'onEdit'
            }, {
                icon: "resources/images/cancel.png",
                tooltip: '删除',
                handler: 'onDelete'

            }]
        }
    ],
    tbar: [
        {
            text: '新增', icon: 'admin/resources/images/group_add.png', handler: 'onAdd'
        }, "-",
        {
            text: '批量删除', icon: 'admin/resources/images/group_delete.png', handler: 'onDeleteAll'
        }, "-"],

});