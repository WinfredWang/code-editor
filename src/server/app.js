var express = require('express');
var app = express();
var path = require('path');

let cwd = process.cwd();
app.use(express.static(path.join(cwd, 'src/browser')));
app.use(express.static(path.join(cwd, 'node_modules/monaco-editor/min')));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
