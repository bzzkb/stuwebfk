/*//  获得http模块
var http = require('http');
// 创建一个http.Server的服务器对象实例
var server = http.createServer();
// 监听 sever的request事件，就是说，当有客户端浏览器访问服务器的时候，
// 服务器内部就会创建一个request对象，当request请求对象创建的时候，触发该事件
server.on('request', handle); // 就是说，当浏览器访问服务器的时候，服务器该作出什么反应

// handle是一个事件处理函数，该函数会接收两个对象，
// request请求对象（只读）和response对象（可写）

function handle(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"}); // 不加这个 html标签 会不显示
    response.write('<h2>1222hello world!</h2>'); // 往浏览器写入数据
    response.end(); // 结束响应
}

// 让服务器监听一个端口
server.listen(3000);*/

var http = require( 'http' );
var fs = require('fs');
var url = require('url');
var server = http.createServer();
server.on( 'request' , handle );
/*function handle( request , response ){
    var data = fs.readFileSync(__dirname+'/public/index.html'); // 也可以写成\\public\\index.html
    response.writeHead( 200 , { 'Content-Type' : 'text/html' });
    response.write(data);
     console.log(__dirname); // 在命令行里面输出 ：f:\stuwebfk\experiment,类型是string
    response.end();              //  __dirname只能输出服务器文件httpServer.js所在的目录(如果是浏览器，要去掉http://localhost:3000)
}*/
function handle(request,response){
    var path = url2path(request.url);
    fs.readFile(__dirname+'/public'+path,callback); 
    console.log('request.url : '+request.url) //  返回字符串类型： /b.html
    console.log('path  ： '+path);
    function callback(err,data) { // err:读取失败的信息，data：读取到的全部内容
        if(err) response.statusCode = 404;
        else {
            // console.log(typeof request.url)
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            
        }
        response.end();
    }
}

function url2path(url_str) {
    var urlObj = url.parse(url_str);
  //  console.log(urlObj)
    var path = urlObj.pathname; // 作者不严谨，写成了path，如果后面有？xx=yy就挂了
    return path;
}
server.listen(3000);

