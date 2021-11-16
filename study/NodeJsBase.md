# 변수
프로그래밍은 데이터 처리를 하는것인데, 변수사용은 데이터를 편리하게 저장하고 꺼내 쓰는 것이다.
변수의 선언과 할당
```js
let A = 1
```
변수명의 규칙-camel Case, 동일한 변수를 이용해 대입가능
변수를 선언만 하고 할당하지 않은 경우 undefined

# 함수
함수는 작은기능의 단위이다. 함수는 항상 출력값을 반환한다.
함수 선언 방법
함수 선언식
```js
function getSum (num1,num2){
    let sum = num1 + num2
    return sum;
}
```
함수 표현식
```js
const getSum =function(num1,num2){
    let sum = num1 + num2
    return sum;
}
```
화살표 함수
```js
const getSum =(num1,num2) =>{
    let sum = num1 + num2
    return sum;
}
```
만약 함수의 본문에 return문만 있는경우, return과 중괄호 생략가능
```js
const getSum =(num1,num2) =>
    num1 + num2
}
```
함수의 선언에서 사용된 변수는 매개변수(parameter)이고, 호출에서 매개변수에 할당된 값 전달인자(argument)라고 한다.

# 조건문
조건문은 어떠한 조건을 판별하는 기준을 만드는것 으로, 비교 연산자가 필요하다.
>,<,===,!== 등으로 비교가 가능하고,비교의 결과는 늘 Boolean값이 된다.
```js
let A =0;
if(A === '0'){
    return 'bad';
} else if(A === 0){
    return 'good';
} else {
    return 'bad';
}
```
And 연산자 - &&
OR 연산자 - ||
NOT 연산자 - !
6가지 falsy 값
false, null, undefined, 0, NaN, ''

# 문자열
- index로 접근은 가능하지만 쓸수는 없음
- +연산자 사용가능 -연산자는 불가 +연산자 사용할 경우, string 형식으로 변환됨
str.indexOf(value) - value값의 인덱스 찾아주는 내장함수
str.split(value) - value값을 기준으로 문자열을 분리해서 배열로 리턴하는 내장함수
모든 string method는 immutable

# 반복문
같거나 비슷한 코드를 여러 번 실행시켜야 할때 사용하는 구문
for 구문 - 초기화, 조건식, 증감문 순으로 넣어줌
```js
let sum = 1;
for(let i=1; i<=4; i++){
 sum += i
}
```
while 구문 - 초기화,증감문은 따로, 조건식만 괄호에 넣어서 사용
```js
let sum = 1;
let i = 1;
while(i <= 4){
    sum += i
    i++
}
```
