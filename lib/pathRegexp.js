 // 以*/(不一定结尾，只要遇到就算匹配)或者*结尾的 用(.*)替代
 xx.replace((/ ( \*{1}(?=\/) ) | ( \*{1}(?=$) ) /g, '(.*)');

     // 以:mx/ 【 注意，mx代表任意字符，】或者:mx结尾的 用(.*)替代
     yy.replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g, "(.*)")

     // 将 / 用字符串 \/ 替换
     zz.replace(/\//g, "\\\/");

     //   demo：

     var path = '/sdfsdf/e3rr/eew?sdfsdf=sdfsdf&sdfsdf=tgfd'; path = path.replace(/\?(.*)$/, "")
     .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g, "(.*)")
     .replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g, "(.*)")
     .replace(/\//g, "\\\/");

     // 输出："\/sdfsdf\/e3rr\/eew"

     /*******************/
     var path = '/sdfsdf/e3rr/eew*?sdfsdf=sdfsdf&sdfsdf=tgfd'; path = path.replace(/\?(.*)$/, "")
     .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g, "(.*)")
     .replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g, "(.*)")
     .replace(/\//g, "\\\/")
     "\/sdfsdf\/e3rr\/eew(.*)"
     /******************/
     var path = '/sdfsdf/e3rr/eew:xxd?sdfsdf=sdfsdf&sdfsdf=tgfd'; path = path.replace(/\?(.*)$/, "")
     .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g, "(.*)")
     .replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g, "(.*)")
     .replace(/\//g, "\\\/");

     // 输出："\/sdfsdf\/e3rr\/eew(.*)"

     /*******************/
     var path = '/sdfsdf/e3rr/eew#?sdfsdf=sdfsdf&sdfsdf=tgfd'; path = path.replace(/\?(.*)$/, "")
     .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g, "(.*)")
     .replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g, "(.*)")
     .replace(/\//g, "\\\/")

     // 输出："\/sdfsdf\/e3rr\/eew#"

     var xx = /(\*{1}(?=\/))/g; console.log(xx.test('*/')); // true;