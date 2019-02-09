var express = require("express");
var http = require('http');
var app = express(); //express 객체 모듈

var server = http.createServer(app); //서버 생성 후 모듈을 넣어줌.
server.listen(3000); //대기 요청

app.get('/', function (req, res) {

  res.sendFile(__dirname + "/client.html");

});
//서버 구성 및 요청에 관한 쿼리까지이다.
//실시간 웹서비스 (연결지향...... : socket.io)

var io = require('socket.io')(server); //socket은 서버 위에서 동작한다는 뜻.

//서버에 이벤트 (기본 이벤트, 사용자 이벤트)

io.on('connect', function (socket) { // 클라이엍
  console.log('클라이언트 접속');

  socket.on('disconnect', function () {
    console.log('접속 종료');
  });

  setInterval(function () {
    socket.emit('message', 'hello world event');
  }, 3000);
});