var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello Everyone');
=======
 res.send('hello all');
>>>>>>> 1856774cf481d5989d1e0c51d1d4927cd52f4ad1
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
