# Typescript
정적타입으로 개발 도중에 Return, 매개변수의 타입을 정하여 런타임 중에 갑자기 변경되지 않음.
특정 변수나 상수에 어떤 타입을 사용했는지를 타입 추론하기 때문에 타입을 지정 안해줘도 됨
값을 설정하지 않을경우만 타입지정 타입 에러 방지

### number
TS에서는 integer, float, double 없이 모두 number

### string
'', "", `` 등의 모든 텍스트

### boolean
true, false 참 거짓 판별

### object
타입을 선언할때 단순 object로 설정시 객체에 대한 정보가 없어 어떤 타입의 속성도 지원하지 않음
ex) {key1: valueType, key2: valueType}
타입스크립트의 추론을 이용하는게 더 좋은 구문

### Array
string[] - 이처럼 안에들어가는 타입을 지정해 줄수 있는데, 여러개의 타입을 넣고 싶다면,
any[] - 이렇게 하여 여러개의 타입 넣기 가능

### Tuple
길이가 고정된 Array로 [number,string]의 모양으로 타입을 지정하고, 타입에 맞지 않는 값 할당 불가 push는 가능함

### Enum
열거목록 제공, enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200} 시작 숫자 할당 혹은 숫자와 문자열을 같이 사용하여 할당도 가능함

### any
특정한 타입이 정해지지 않은 타입, 바닐라JS와 크게 차이가 없기 때문에 TS compiler가 작동하지 않음.
런타임 도중 특정 값에 수행하고자 하는 작업의 범위를 좁히기 위해서만 any사용 권장
