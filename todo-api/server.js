var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000 ;
app.get('/' , function(req,res){

res.send('TODO api root');


});

app.listen(PORT , function(){

console.log('express listening on port' + PORT );


});