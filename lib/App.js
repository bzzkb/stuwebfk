// App.js文件 ， 该文件表示应用程序类
var http = require('http');

function App() {
    this._middleList = [];
    this._server = http.createServer(handle);

    var middleList = this._middleList;

    function handle( request , response ) {
        console.log(this)
        if(middleList.length === 0) { // 如果这里写为this._middleList.length就错了
            // 如果没有功能插件，那么什么都不做。
        }
        else {
            var middleIndex = 0; // 插件索引
            execMiddle();

            function execMiddle() {
                var middle = middleList[ middleIndex ];
                if( middle ) middle( request , response , next );
            }

            function next() {
                middleIndex++;
                execMiddle();
            }
        } // else end
    } // handle end 
}

App.prototype.use = function(middle) {
    this._middleList.push(middle);
}
App.prototype.listen = function() { // httpServer对象的this是自身
    this._server.listen.apply( this._server , arguments ); // 这里的对象是新创建的App对象实例，所以要apply
}
module.exports = App; // 外界可以访问到App类