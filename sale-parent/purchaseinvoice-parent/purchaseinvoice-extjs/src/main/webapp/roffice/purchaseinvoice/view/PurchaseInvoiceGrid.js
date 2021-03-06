/**
 * 设备发票表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceGridController',
        'kalix.roffice.purchaseinvoice.store.PurchaseInvoiceStore',
    ],
    alias: 'widget.purchaseinvoiceGrid',
    xtype: 'purchaseinvoiceGridPanel',
    controller: {
        type: 'purchaseinvoiceGridController',
        storeId: 'purchaseinvoiceStore',
        cfgForm: 'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceWindow',
        cfgViewForm: 'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceViewWindow',
        cfgModel: 'kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel'
    },
    store: {
        type: 'purchaseinvoiceStore'
    },
    columns: {
        defaults: {flex: 1},
        items: [
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
        }, {
            text: '开发票日期',
            dataIndex: 'invoiceDate',
            xtype: 'datecolumn',
            //format: 'Y-m-d'

            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd");
            }
        }, {
            text: '发票金额',
            dataIndex: 'money',
            //formatter: 'usMoney',
            renderer: 'renderMoney'
        }, {
            text: '税率',
            dataIndex: 'rate',
        }, {
            text: '发票号',
            dataIndex: 'invoiceNo',
        }, /* {
            text: '采购编号',
            dataIndex: 'purchaseId',
            flex: 1
         },*/
        {
            text: '备注',
            dataIndex: 'comment',
            flex: 2
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
            xtype: 'datecolumn',
            formatter: 'date("Y-m-d H:i:s")'
        },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:deployModule:purchaseInvoiceMenu:view',
                    'roffice:deployModule:purchaseInvoiceMenu:edit',
                    'roffice:deployModule:purchaseInvoiceMenu:delete'
                ]
            }]
    },

    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:deployModule:purchaseInvoiceMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }

});
