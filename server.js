var express = require('express');
var app = express();

//about
//about us
var middleware =   {

requireauthetication : function (req , res , next){

     console.log("private route hit");
     next();

},
logger : function (req,res,next){

     console.log('request' + new Date().toString() + req.method) ;
     next();

}
 
};

app.use(middleware.logger);

app.get('/about'  ,middleware.requireauthetication, function(req,res){

res.send("about us");

});


app.use(express.static( __dirname + '/public' ));
app.listen(3000 , function(){

console.log("express server started")


});