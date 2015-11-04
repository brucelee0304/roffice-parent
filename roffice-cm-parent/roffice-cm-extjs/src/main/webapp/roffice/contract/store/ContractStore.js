/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.store.ContractStore', {
    extend: 'Ext.data.Store',
    model: 'kalix.roffice.contract.model.ContractModel',
    alias: 'store.contractStore',
    xtype: 'contractStore',
    storeId: "contractStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/contracts',
        paramsAsJson: true,
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});