var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 // Assuming this is in your index.js file
res.send('hello to new world');

});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
