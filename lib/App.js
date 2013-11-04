// App.js文件 ， 该文件表示应用程序类
var http = require('http');

function App() {
    this._middleList = [];
    this._server = http.createServer(handle);

    this._route_post_handles = {};
    this._route_get_handles = {};

    var middleList = this._middleList;
    var self = this; // upadate 10.21；

    function handle( request , response ) {
       // console.log(this) // 这里的this是http的那个对象，具体我还没有测试出来
        /*if(middleList.length === 0) { // 如果这里写为this._middleList.length就错了
            // 如果没有功能插件，那么什么都不做。
        }*/
 //       else {
            var middleIndex = 0; // 插件索引
            execMiddle();

            function execMiddle() {
                var middle = middleList[ middleIndex ];
                if( middle ) {
                    middle( request , response , next );
                    console.log(222222222);
                }
                else { // upadate 10.21：
                    // 判断是get还是 post方法
                    console.log(3434656768789980);
                    var handle = null;
                   // console.log('request.method : '+request.method);
                   console.log('__dirname : '+__dirname);
                    switch( request.method ) {
                        case 'GET' :
                               /* if( self._getHandle ) {
                                    self._getHandle( request , response );
                                }*/
                               handle = self._route_get_handles[ request.url ];
                        break;
                        case 'POST' :
                                /*if( self._postHandle ) {
                                    self._postHandle( request , response );
                                }*/
                                handle = selft._route_post_handles[ request.url ];
                        break;
                    }
                    if( handle ) {
                        handle( request , response );
                    }
                }
            }

            function next() {
                middleIndex++;
                execMiddle();
            }
 //       } // else end
    } // handle end 
}

App.prototype.use = function(middle) {
    this._middleList.push(middle);
}
App.prototype.listen = function() { // httpServer对象的this是自身
    this._server.listen.apply( this._server , arguments ); // 这里的对象是新创建的App对象实例，所以要apply
}
// update 10.21 :
App.prototype.get = function( route , handle ) {
    this._route_get_handles[ route ] = handle;
}
App.prototype.post = function( route , handle ) {
    this._route_post_handles[ route ] = handle;
}
module.exports = App; // 外界可以访问到App类