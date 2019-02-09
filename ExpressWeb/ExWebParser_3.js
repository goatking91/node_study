var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000);

var morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//bodyParser.urlencoded
//내부적으로 true를 하면 qs로 모듈을 사용하고, false면 query-string 모듈을 사용한다.

app.post('/', function (req, res) {
  var title = req.body.title;
  var message = req.body.message;   
  
  res.send('title : ' + title + ' message : ' + message);
   
});