var express = require('express');
var app = express();

app.get('/number', function (req, res) {
  res.send({
    result : (Math.random() * 100000) | 0
  });
});

app.use(express.static('public'));

var server = app.listen(3000, function () {

  var port = server.address().port;
  console.log('Server listening on port', port);

});