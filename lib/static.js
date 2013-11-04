var url = require('url');
var fs = require('fs');

function url2path(urlStr){
    return url.parse(urlStr).pathname;
}

module.exports = function static(parent_path) {
    return function( request , response , next ) {
        var path = url2path(request.url);
        console.log('path : '+ parent_path + path);
        fs.readFile( __dirname+parent_path + path , callback ); // 之前没有加 __dirname,那么就会读取文件失败

        function callback( err , data ) {
            if(err) { // 如果读取错误，可以用console.log(err)查看一下 错误信息，这样就更好定位了
                console.log( err );
                response.statusCode = 404;
                next();
            }
            else {
                console.log( 'lalala' );
                response.writeHead(200 , {'Content-Type' : 'text/html'});
                response.write(data);
            }
            response.end();
        }
    }
}