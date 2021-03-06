/**
 * 任务目标数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.store.TaskStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.task.model.TaskModel',
    alias: 'store.taskStore',
    xtype: 'taskStore',
    storeId: "taskStore",
    proxyUrl: CONFIG.restRoot+'/camel/rest/tasks',
    groupField: 'name',
    pageSize: 20
});