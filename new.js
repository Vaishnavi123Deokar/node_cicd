var express = require('express');

var app = express();

// Respond with a combined message for requests that hit our root
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('hello Everyone Have A Nice Day');
=======
  res.send('hello all, Have A Nice Day!');
>>>>>>> 1856774cf481d5989d1e0c51d1d4927cd52f4ad1
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
