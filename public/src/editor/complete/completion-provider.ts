
// function xmlCompletionProvider() {
//     var item1 = [{
//         insertText: "picker-view>{{}}</picker-view>",
//         documentation: "内嵌选择器",
//         label: "picker-view",
//         kind: 13
//     },
//     {
//         insertText: "picker>{{}}</picker>",
//         documentation: "选择器",
//         label: "picker",
//         kind: 13
//     }, {
//         insertText: "div></div>",
//         documentation: "div",
//         label: "div",
//         kind: 13
//     }, {
//         insertText: "div id=''></div>",
//         documentation: "<div id=''></div>",
//         label: "div_id",
//         kind: 9
//     }];
//     var item2 = [{
//         insertText: "<picker-view>{{}}</picker-view>",
//         documentation: "内嵌选择器",
//         label: "picker-view",
//         kind: 13
//     },
//     {
//         insertText: "<picker>{{}}</picker>",
//         documentation: "选择器",
//         detail: "xxxxxxxxxxxxx",
//         filterText: "p",
//         range: {},
//         label: "picker",
//         kind: 13
//     }, {
//         insertText: '<div class=""></div>',
//         documentation: '<div class=""></div>',
//         label: "div.class",
//         kind: 9
//     }, {
//         insertText: '<div id=""></div>',
//         documentation: '<div id=""></div>',
//         label: "div#id",
//         kind: 9
//     }];

//     var item3 = {
//         "picker-view": [{
//             insertText: 'indicator-style="{{String}}"',
//             documentation: "设置选择器中间选中框的样式",
//             label: "indicator-style",
//             kind: 9
//         },
//         {
//             insertText: 'bindchange="{{EventHandle}}"',
//             documentation: "当滚动选择，value 改变时触发 change 事件",
//             label: "bindchange",
//             kind: 9
//         },
//         {
//             insertText: 'value="{{Array}}"',
//             documentation: "指定选择内容",
//             label: "value",
//             kind: 9
//         }], picker: [{
//             insertText: 'mode="{{selector}}"',
//             documentation: "类型",
//             label: "mode",
//             kind: 9
//         },
//         {
//             insertText: 'fields="{{day}}"',
//             documentation: "日期选择器的选择范围",
//             label: "fields",
//             kind: 9
//         },
//         {
//             insertText: 'start="{{String}}"',
//             documentation: "时间或日期的开始范围",
//             label: "start",
//             kind: 9
//         },
//         {
//             insertText: 'end="{{String}}"',
//             documentation: "时间或日期的结束范围",
//             label: "end",
//             kind: 9
//         },
//         {
//             insertText: "disabled",
//             documentation: "是否禁用",
//             label: "disabled",
//             kind: 9
//         }]
//     }

//     var item4 = {
//         "picker,mode": [{
//             insertText: "selector",
//             documentation: "单项选择器",
//             label: "selector",
//             kind: 11
//         },
//         {
//             insertText: "time",
//             documentation: "时间选择器",
//             label: "time",
//             kind: 11
//         },
//         {
//             insertText: "date",
//             documentation: "日期选择器",
//             label: "date",
//             kind: 11
//         }],
//         "picker,fields": [{
//             insertText: "day",
//             documentation: "可以选择年、月、日",
//             label: "day",
//             kind: 11
//         },
//         {
//             insertText: "month",
//             documentation: "可以选择年、月",
//             label: "month",
//             kind: 11
//         },
//         {
//             insertText: "year",
//             documentation: "可以选择年",
//             label: "year",
//             kind: 11
//         }]
//     };
//     monaco.languages.registerCompletionItemProvider('xml', {
//         provideCompletionItems: function (model, position, token) {
//             var lineNumber = position.lineNumber;
//             var l = model.getLineContent(lineNumber).substr(0, position.column - 2);

//             if (!(l.lastIndexOf("<") != l.lastIndexOf("</")
//                 && l.lastIndexOf("<") > l.lastIndexOf(">")
//                 && l.lastIndexOf(" ") > l.lastIndexOf("<"))) {
//                 return l.lastIndexOf("<") > -1 && l.lastIndexOf("<") == l.length - 1 ? item1 : item2;
//             }

//             var c = l.substring(l.lastIndexOf("<")).trim(),
//                 u = c.indexOf(" ") > 0 ? c.substring(1, c.indexOf(" ")) : c.substr(1).trim(),
//                 d = c.substring(c.lastIndexOf(" "), c.lastIndexOf('="')).trim();

//             if (c.lastIndexOf('="') == c.length - 2) {
//                 if (u && d && item4[u + "," + d]) {
//                     return item4[u + "," + d];
//                 }
//             } else if (u && item3[u]) {
//                 return item3[u];
//             }

//             return [];
//         }
//     });
// }

