## NodeJs
이전까지 웹브라우저에서만 사용되던 javascript를 웹브라우저 밖에서도 사용해보자는 논의가 진행되는중에 2009년 1월에 CommonJS 라는 오픈소스표준이 탄생하게 된다.
node.js 기반의 웹서버를 구축하기 위한 설치, 기초문법, 기본구조(event, module 사용법 등) 그리고 node.js의 웹서버모듈인 http 사용에 중점을 두었다.

#### 용어(기본)

* 모듈 : 다른 개발언어에서의 라이브러리와 유사한 개념입니다. node.js에 내장되어 바로사용할 수 있는 내부모듈과 플러그인처럼 설치해서 사용해야 하는 외부모듈이 있습니다. 대표적인 외부모듈이 express 입니다.

* 이벤트 : node.js 의 근간이 되는 서버 구동방식입니다. 객체지향에서의 callback 과 동일한 형태의 설계패턴으로 node.js는 이벤트기반의 비동기 방식으로 서버가 동작합니다. 로직상에서 이벤트가 연결되면 해당이벤트는 서버가 클라이언트의 요청을 대기하기 위해 listener를 동작시키는것과 같이 연결한 이벤트를 catch하기 위해 대기하게 됩니다.

* 객체 : 함수형 언어인 javascript는 함수자체를 객체로 사용할 수 있지만, 객체지향처럼 독립적인 객체 단위도 지원합니다. 모듈과 객체가 비슷한 점이 있는데 모듈은 객체들의 묶음으로 집합관계라고 생각하시면 됩니다. 모듈은 내장모듈과 외부모듈 모두 require( ) 함수로 따로 생성을 해야지만 사용할 수 있지만, 내장객체의 경우 별다른 선언이나 생성없이 바로 사용할 수 있습니다.

#### 예제 Test
[server_get](https://github.com/ssongmo/NodeJsBasic/blob/master/nodejs_server_get.md)

[server_post](https://github.com/ssongmo/NodeJsBasic/blob/master/nodejs_server_post.md)

[server_module](https://github.com/ssongmo/NodeJsBasic/blob/master/nodejs_server_module.md)

[server_events](https://github.com/ssongmo/NodeJsBasic/blob/master/nodejs_server_events.md)

[server_file](https://github.com/ssongmo/NodeJsBasic/blob/master/nodejs_server_file.md)
