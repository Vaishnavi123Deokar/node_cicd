var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
 res.send('hello dearrrr');
>>>>>>> 1856774cf481d5989d1e0c51d1d4927cd52f4ad1
=======
 res.send('hello dearrrr');
>>>>>>> 47fbfd33979ae73d8c3a4be038ce29b973aa58ce
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
