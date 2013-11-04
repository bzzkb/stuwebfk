var fk = require('../..');
var App = fk.App;
var app = new App();
var static_middle = fk.static;

app.use( static_middle( __dirname+'/public' ) ); // 不要将__dirname前面的两杠，写成一杠，我之前就是的

app.get( function(request,response) {
    response.write( 'I am GET method result!' );
    response.end();
} );
app.post( function(request , response) {
    response.write( 'I am Post method result!' );
    response.end();
} );

app.listen( process.env.PORT || 3000 ); // process.env.PORT 是什么意思？失效了，明天查查