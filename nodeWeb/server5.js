var http = require('http');
var querystring = require('querystring');

var movieList = [{title:'비트', director:'뉴딜'}];

var server = http.createServer(function(req, res) {
  if(req.method.toLowerCase() == 'post') {
    // 처리 (실제 데이터 처리) : 클라이언트의 데이터 받아서 배열에 넣기
    addNewMovie(req, res);
  } else {
    // get
    // 처리 (화면 보여주기)
    showList(req, res);
    
  }
});
server.listen(3000);

function showList(req, res) {
  res.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<html>');
  res.write('<meta charset="UTF-8">');
  res.write('<body>');

  res.write('<h3>Favorite Movie</h3>');
  res.write('<div><ul>');

  movieList.forEach(function (item) {
      res.write('<li>' + item.title + '(' + item.director + ')</li>');
  }, this);
  res.write('</ul></div>');

  res.write(
      '<form method="post" action="."><h4>새 영화 입력</h4>' +
      '<div><input type="text" name="title" placeholder="영화제목"></div>' +
      '<div><input type="text" name="director" placeholder="감독"></div>' +
      '<input type="submit" value="upload">' +
      '</form>'
      );
  res.write('</body>');
  res.write('</html>');
  res.end();
}

function addNewMovie(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() { // 데이터 다 받아서 분석(입력값)
    // require('querystring'); 모듈 
    var data = querystring.parse(body); // data(json 객체)
    var titledata = data.title;
    var directordata = data.director;

    // 배열에 넣기
    movieList.push({title:titledata, director:directordata});
    // res.end("success");
    res.statusCode = 302;
    res.setHeader('Location', '.');
    res.end();
    //  get 방식 (화명처리) : 재요청
    // redirect
    // location.href
  });
}