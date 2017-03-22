## NodeJs - Module
module을 직접 만들어보고 내가 만든 모듈을 require로 객체화한 후에 사용해 보도록 하겠다.

2개의 js파일을 생성해준다.
custom_module.js
```
// 1. exports 객체를 사용해서 sum이라는 변수를 만들고, sum 변수에 function 을 사용해서 하나의 파라미터를 가진 함수식을 대입
exports.sum= function(max) {
    // 2. 입력된 값을 최대값으로 1부터 최대값까지 더해서 반환하는 로직
    return (max+1)*max/2;
}

// 3. var1 변수에 'NEW VALUE 100' 입력
var var1 = 'NEW VALUE 100';

exports.getVal1 = function(){
  return var1;
}
```
module_test.js
```
var custom = require('./custom_module');  //다른 폴더라면 'aaa/custom_module'
var result = custom.sum(100);
console.log("result ="+ result);

console.log("var1="+custom.getVal1());
```
