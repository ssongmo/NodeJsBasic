## NodeJs - Get

주소값을 이용해 요청을 하는 방식이다.
서버로 값을 전달하기 위해서 서버측 주소 끝에 ?(물음표)를 붙이고 키1=값1&키2=값2 의 형태로 요청한다.
http://naver.com/Post.nhn?postId=3572432&cafeId=158763
위와 같이 브라우저를 통해 naver.com/Post.nhn 주소로 요청을 하게 되는데 서버측에서는 ?(물음표) 다음의 값들을 변수와 값의 형태로 받아서 사용하게 되는데, 이렇게 실제 주소값 뒤에 붙어가는 값을 Query String 이라고 한다.
Query String 은 주소형태로 요청할 수도 있고, HTML에 있는 form 태그를 사용해서 요청할 수도 있다.


#### *예제*
```
var http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

var server = http.createServer(function(request,response){
    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    //http://도메인/디렉토리/디렉토리2/파일명?   변수1 = 값 & 변수2 = 값
    //http://localhost:8080/aaa/bbb/ccc.jsp?abc=adfg&cafe=12345

    console.log(parsedQuery);
    console.log("abc="+parsedQuery.abc);
    console.log("cafe="+parsedQuery.cafe);

    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello </br>node.js!!<img src="/images/aaa.jpg"/>');

});

server.listen(8080, function(){
    console.log('Server is running...');
});
```
