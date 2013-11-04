var App = require('../..').App;
var static = require('../..').static;
var app = new App();

app.get( '/about' ,function( request , response ) {
    response.write( 'my name is leo' );
    response.end();
} );

app.get( '/contant' ,function( request , response ) {
    response.write( 'contact me use QQ 539882035' );
    response.end();
} );

app.use( static('/public') );

app.get( '/about.html' , function( request , response ){
    response.write('<h2>hello</h2>');
    response.end();

} );

// __dirname 是服务器文件所在的目录路径，就的创建http.createServer（）；那个文件所在目录

app.listen(3000);