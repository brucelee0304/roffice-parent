/**
 * 项目机会查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.chance.viewModel.ChanceViewModel',
        'kalix.roffice.chance.controller.ChanceFormController'
    ],
    alias: 'widget.chanceViewForm',
    viewModel: 'chanceViewModel',
    controller: 'chanceFormController',
    xtype: "chanceViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看项目机会',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [{
            fieldLabel: '项目名称',
            labelAlign: 'right',
            bind: {
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '营销负责人',
            labelAlign: 'right',
            bind: {
                value: '{rec.salerId}'
            }
        }, {
            fieldLabel: '项目类型',
            labelAlign: 'right',
            bind: {
                value: '{rec.type}'
            }
        }, {
            fieldLabel: '所属行业',
            labelAlign: 'right',
            bind: {
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '优先级',
            labelAlign: 'right',
            bind: {
                value: '{rec.level}'
            }
        }, {
            fieldLabel: '预算额度',
            labelAlign: 'right',
            bind: {
                value: '{rec.budget}'
            }
        }, {
            fieldLabel: '预计签单时间',
            labelAlign: 'right',
            bind: {
                value: '{rec.billDate}'
            },
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd hh:mm:ss");
            }
        }, {
            fieldLabel: '售前支持负责人',
            labelAlign: 'right',
            bind: {
                value: '{rec.supporterId}'
            }
        }, {
            fieldLabel: '客户联系人姓名',
            labelAlign: 'right',
            bind: {
                value: '{rec.clientName}'
            }
        }, {
            fieldLabel: '客户联系人电话',
            labelAlign: 'right',
            bind: {
                value: '{rec.clientPhone}'
            }
        }, {
            fieldLabel: '描述',
            labelAlign: 'right',
            bind: {
                value: '{rec.description}'
            }
        }, {
            fieldLabel: '备注',
            labelAlign: 'right',
            bind: {
                value: '{rec.comment}'
            }
        }
        ],
        buttons: [{
            text: '关闭',
            glyph: 'xf00d@FontAwesome',
            handler: function () {
                this.up('.window').close();
            }
        }
        ]
    }
    ]
});