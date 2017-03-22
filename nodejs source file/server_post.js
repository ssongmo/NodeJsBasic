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
