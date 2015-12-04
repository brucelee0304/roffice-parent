/**
 * 公司新闻新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.view.NewsWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.news.viewModel.NewsViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore',
        'Ext.ux.form.TinyMCETextArea'
    ],
    alias: 'widget.newsWindow',
    viewModel: 'newsViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'newsStore'
    },
    xtype: "newsWindow",
    width: 950,
    height: 500,
    layout: 'fit',
    focusOnToFront: false,
    toFrontOnShow: false,
    preventFocusOnActivate: true,
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '标题',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.title}',
                value: '{rec.title}'
            }
        }, {
            fieldLabel: '内容',
            labelAlign: 'right',
            allowBlank: false,
            //region: 'center',
            xtype: 'tinymce_textarea',
            height: 320,
            //fieldStyle: 'font-family: Courier New; font-size: 12px;',
            tinyMCEConfig: {
                /*plugins: [
                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                    "searchreplace wordcount visualblocks visualchars code fullscreen",
                    "insertdatetime media nonbreaking save table contextmenu directionality",
                    "emoticons template paste textcolor"
                ],*/
                /*toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
                toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | inserttime preview | forecolor backcolor",
                toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
                */content_css : "resources/css/contents.css",
                menubar: true,
                toolbar_items_size: 'small',
                language:'zh_CN'
            },
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        }]
    }]
});