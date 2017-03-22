## NodeJs - File IO

node.js의 파일입출력을 다뤄본 후, 이전장에서 배운 url 모듈을 함께 사용하여 요청된 자원이 파일일 경우 해당 파일을 읽어서 클라이언트에 전달하는 로직을 작성해 보겠다.
* node.js 는 파일을 읽고 쓰기 위해서 동기와 비동기 두 가지 형태의 함수를 제공한다. 이벤트방식의 비동기를 지향하기 때문에 **비동기 방식**의 파일 읽고 쓰기가 default다.

1. 먼저 index.html을 간단하게 작성한다.
![스크린샷 2017-03-22 오후 4.18.12](http://i.imgur.com/RttuHru.png)

2. 원하는 image파일을 js파일과 같은 디렉토리에 넣어준다.


3. 아래의 소스 코드를 구현한다.

```
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
```

이번 토픽에서 가장 인상 깊었던 부분은 2번이다. 안드로이드와 다르게 readFile에서 많은 것을 해결해준다는 것을 알게 되었다..
