## 클라이언트 요청(POST) 처리

* POST 형태의 요청은 GET과는 요청하는 측의 데이터 구조가 다르다. GET의 경우는 앞장에서 학습한것과 같이 주소의 끝에 ?(물음표)를 붙이고 뒤에 변수명=값 형태로 요청을 하지만, POST는 주소만 요청하고 변수와 값을 주소가 아닌 요청 BODY에 담아서 서버측에 요청한다.

#### HTTP 프로토콜의 구조

HTTP 프로토콜은 브라우저에서 서버로 요청(REQUEST) 하거나 서버에서 브라우저로 응답(RESPONSE)할 때 서로 데이터를 주고받게 되는데 이 데이터의 구조는 요청에 대한 설정정보가 담기는 HEADER와 실제 데이터가 담기는 BODY로 구성된다.

#### *예제*
```
var http = require('http');
var querystring = require('querystring');

var server = http.createServer( function(request,response){
  // 1. post로 전달된 데이터를 담을 변수를 선언
  var postdata = 'aaa=12345';
  // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
  //on()이라는 함수를 사용하면 서버가 비동기 스레드를 하나 더 생성된다.
  //안드로이드의 리스너와 완전히 동일한 동작을 한다. (리스너를 달고 data, (아래의)end 이벤트를 받는다.)

  request.on('data', function (data) {
    console.log('ok?');
    // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
    postdata = postdata + data;
  });

  // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
  request.on('end', function () {
    // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
    var parsedQuery = querystring.parse(postdata);
    // 6. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('var1의 값 = ' + parsedQuery.aaa);
  });

});

server.listen(8080, function(){
    console.log('Server is running...');
});

```
