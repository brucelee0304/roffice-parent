/**
 * 项目回款表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.view.ReceiveGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.receive.viewModel.ReceiveViewModel',
        'kalix.roffice.receive.controller.ReceiveGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar'
    ],
    alias: 'widget.receiveGrid',
    xtype: 'receiveGridPanel',
    controller: 'receiveGridController',
    viewModel: 'receiveViewModel',
    autoLoad: true,
    stripeRows: true,
    /*viewConfig: {
     forceFit: true,
     },*/
    columns: [
        {
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            align: 'center'
        },
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        }, {
            text: '回款日期',
            dataIndex: 'receiveDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '回款金额',
            dataIndex: 'money',
            flex: 1
        }, {
            text: '合同id',
            dataIndex: 'contractId',
            flex: 1
        },
        {
            text: '备注',
            dataIndex: 'comment',
            flex: 3
        },
        {
            text: '最后修改人',
            dataIndex: 'updateBy',
            flex: 1
        },
        {
            text: '最后修改时间',
            dataIndex: 'updateDate',
            flex: 2,
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd hh:mm:ss");
            }
        }],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:receiveMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '新增',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:receiveMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '修改',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:receiveMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:receiveMenu:delete',
                handler: 'onDelete',
                bind: {
                    icon: '{delete_image_path}'
                }
            }
        ]

        //需要验证权限后添加的按钮
        //verifyItems: []
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'receive-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('receiveStore'));
            }
        }
    }
    ],

});
