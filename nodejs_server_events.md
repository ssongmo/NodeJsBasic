## NodeJs - Event
 node.js 는 이벤트 기반 비동기 방식의 서버프레임웍이다. 이번장에서는 node.js 의 핵심이랄 수 있다.
먼저 이벤트를 이해하기 위해서는 이벤트를 생성하고, 연결한 후, 이벤트를 발생시켜서 연결된 로직을 실행하는 기본 기능들을 알아야만 하는데 node.js 에서는 기본적으로 아래의 세가지 함수와 객체를 이용해서 이벤트 처리를 하게된다.

* EventEmitter : node.js 의 모든 이벤트처리가 정의된 기본객체입니다. 이벤트를 사용하기 위해서는 이 객체를 재정의해서 사용해야할 수 있다.
* on( ) : 이벤트를 연결하는 함수입니다. 이전장에서 request 객체에 on( ) 함수를 이용해서 'data'라는 이벤트를 캐치해서 사용했었는데 모든 이벤트처리는 이런 동일한 루틴을 거쳐서 사용하게 된다.
* emit( ) : 이벤트를 발생시키는 함수입니다. 위의 on( ) 함수에서 'data'라는 이벤트가 캐치되기 위해서는 emit('data') 의 형태로 이벤트를 발생시켜야 한다.

### *예제*
```
var http = require('http');

var EventEmitter = require('events');
var custom_object = new EventEmitter();

//이벤트 리스너 등록
custom_object.on('call', ()=>{
  console.log('called events!');
});

function call(){ //이것으로 호출하게 되면 비동기 형식으로 호출되기때문에 더 좋다.
  console.log('called events!');
}

var server = http.createServer((request, response)=> {
  //요청한 url이 /call과 같으면 위에 작성된 call이벤트를 발생시킨다.
  if(request.url == "/call"){
    custom_object.emit("call"); //custom_object.on

    call(); //function call()
  }

  response.end("");
});

server.listen(10000, ()=>{
  console.log("Server is running...");
});

```
