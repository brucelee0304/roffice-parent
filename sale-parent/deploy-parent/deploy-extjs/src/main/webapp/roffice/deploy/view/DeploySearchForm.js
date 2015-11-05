/**
 * 实施项目查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.view.DeploySearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.deploy.controller.DeploySearchFormController'
    ],
    alias: 'widget.deploySearchForm',
    xtype: 'deploySearchForm',
    controller: 'deploySearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    //todo 在此修改查询条件
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '项目名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
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
