var App = require('../..').App;
var app = new App();
var middle01 = require('./middle01');
var middle02 = require('./middle02');

app.use(middle01);
app.use(middle02);

app.listen(3000);