/**
 * 用户编辑表单
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.<pomName>.view.<beanName>EditForm', {
    extend: 'Ext.FormPanel',
    requires: [
        'kalix.<pomName>.viewModel.<beanName>ViewModel',
        'kalix.<pomName>.controller.<beanName>FormController'
    ],
    alias: 'widget.<pomName>EditForm',
    viewModel: {
        type: '<pomName>ViewModel'
    },
    current<beanName>: null,
    config: {
        current<beanName>: null
    },

    bind: {
        current<beanName>: "{current<beanName>}",
    },
    controller: '<pomName>FormController',
    id: "<pomName>EditForm",
    xtype: '<pomName>EditForm',
    labelAlign: 'center',
    labelWidth: 75,
    autoWidth: true,
    autoHeight: true,
    bodyStyle: "padding:15px",
    frame: true,
    jsonSubmit: true,
    method: "PUT",
    defaultType: 'textfield',
    buttonAlign: "center",

    items: [
        {xtype: 'hiddenfield', name: 'id', bind: {value: '{current<beanName>.id}'}},

        {
            fieldLabel: '标题',
            id: 'titleId',
            name: 'text',
            allowBlank: false,
            blankText: '标题不能为空!',
            beforeLabelTpl: [
                '\<span style="color:red;font-weight:bold" data-qtip="必填选项">*\</span>'
            ]
        },
        {
            fieldLabel: '内容',
            id: 'contentId',
            xtype: 'textarea',
            name: 'comment',
            allowBlank: false,
            blankText: '内容不能为空!',
            beforeLabelTpl: [
                '\<span style="color:red;font-weight:bold" data-qtip="必填选项">*\</span>'
            ]
        },

    ],
    buttons: [
        {
            text: '保存', glyph: 0xf0c7, type: 'submit', handler: 'onUpdate',
        },
        {
            text: '重置', glyph: 0xf0e2, handler: 'onEditReset'
        }
    ]
});