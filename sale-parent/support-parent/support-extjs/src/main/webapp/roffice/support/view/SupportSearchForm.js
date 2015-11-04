/**
 * 项目支持查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.view.SupportSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.support.controller.SupportSearchFormController'
    ],
    alias: 'widget.supportSearchForm',
    xtype: 'supportSearchForm',
    controller: 'supportSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    //todo 在此修改查询条件
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '标题',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'title'
        },
        {
            xtype: 'button',
            text: '查询',
            margin: '0 0 0 10',
            handler: 'onSearch',
            glyph: 'xf002@FontAwesome',
        }
    ]
});