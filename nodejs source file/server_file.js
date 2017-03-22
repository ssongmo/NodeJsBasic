// 1. fs(파일시스템) 모듈 사용
var http = require('http');
var url = require('url');
var fs = require('fs');



//1.서버생성.
var server = http.createServer((request, response)=>{
  var parsedUrl = url.parse(request.url);
  var res = parsedUrl.pathname;

  if(res == "/index.html"){
    //2. 비동기방식의 파일읽기. 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
    //readFile에서 스트링, 버퍼, 클로즈, 스트림까지 모두 다 처리해준다.
    fs.readFile('index.html', 'utf-8',(error, data)=>{
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(data);
    });
  }else if(res == "/irin.jpeg"){
    fs.readFile('irin.jpeg', (error, data)=>{
      response.writeHead(200, {'Content-Type':'image/jpeg'});
      response.end(data);
    });
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end("<h1>404 Page not Found</h1>");

  }
});
//

// fs.readFile('server_get.js', 'utf-8', function(error, data) {
//     console.log('01 readAsync: %s',data);
// });

server.listen(9000, ()=>{
  console.log("Server is running...");
});
