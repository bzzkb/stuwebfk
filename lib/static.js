var url = require('url');
var fs = require('fs');

function url2path(urlStr){
    return url.parse(urlStr).pathname;
}

module.exports = function static(parent_path) {
    return function( request , response , next ) {
        var path = url2path(require.url);
        fs.readFile( parent_path + path , callback );

        function callback( err , data ) {
            if(err) {
                response.statusCode = 404;
            }
            else {
                response.writeHead(200 , {'Content-Type' : 'text/html'});
                response.write(data);
            }
            response.end();
        }
    }
}