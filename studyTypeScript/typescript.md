# Typescript

정적타입으로 개발 도중에 Return, 매개변수의 타입을 정하여 런타임 중에 갑자기 변경되지 않음.
특정 변수나 상수에 어떤 타입을 사용했는지를 타입 추론하기 때문에 타입을 지정 안해줘도 됨
값을 설정하지 않을경우만 타입지정 타입 에러 방지

### number

TS에서는 integer, float, double 없이 모두 number
앞에 +를 붙이면 Number(string)와 같은 효과

### string

'', "", `` 등의 모든 텍스트

### boolean

true, false 참 거짓 판별

### object

타입을 선언할때 단순 object로 설정시 객체에 대한 정보가 없어 어떤 타입의 속성도 지원하지 않음
ex) {key1: valueType, key2: valueType}
타입스크립트의 추론을 이용하는게 더 좋은 구문

### Array

string[] - 이처럼 안에들어가는 타입을 지정해 줄수 있는데, q여러개의 타입을 넣고 싶다면,
any[] - 이렇게 하여 여러개의 타입 넣기 가능

### Tuple

길이가 고정된 Array로 [number,string]의 모양으로 타입을 지정하고, 타입에 맞지 않는 값 할당 불가 push는 가능함

### Enum

열거목록 제공, enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200} 시작 숫자 할당 혹은 숫자와 문자열을 같이 사용하여 할당도 가능함

### any

특정한 타입이 정해지지 않은 타입, 바닐라JS와 크게 차이가 없기 때문에 TS compiler가 작동하지 않음.
런타임 도중 특정 값에 수행하고자 하는 작업의 범위를 좁히기 위해서만 any사용 권장

### union type

input1: number | string | boolean - 이처럼 선언하여 다양한 타입을 받을수 있지만 예외처리를 해줘야함

### literal type

스트링이나 숫자 등과 같은 핵심 타입을 기반으로 특정목적으로 사용 가능

### alias

type 이름 = number | string으로 union 타입대신 참조해서 사용가능

### Function type

Function 함수를 이용하여 타입 선언은 가능하지만 아무 함수나 적용가능, let combineValues: (a:number, b:number)=> number; 이처럼 변수와 리턴에 대한 타입을 지정하여 에러 방지

### unknown type

any 타입과 다르게 문자열을 원하는 변수에 할당할수 없는데 any 타입은 가능

### never type

void 타입과 다르게 never 이라는 타입을 반환 잘 사용하지는 않음.

## TS Compiler

tsc --init 명령어로 tsconfig.json 생성 후 tsc -w 를 이용해 와치모드로 변화 감지시 모든 ts파일 컴파일 가능
include, exclude 사용 가능 단 사용시 기본으로 되는 부분들이 빠지기 때문에 잘 확인해야함
compiler Options - noImplicitAny(Any타입 추론 관련),
tsconfig 문서: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
컴파일러 구성 문서: https://www.typescriptlang.org/docs/handbook/compiler-options.html
VS Code TS 디버깅: https://code.visualstudio.com/docs/typescript/typescript-debugging

### Public vs Private

public은 외부에서 접근이 가능하여 사이드이펙트 발생가능
private는 class내부에서만 접근이 가능
확장된 클래스에서 사용을 원할때는 protected를 이용
constructor 앞에 private를 붙여 new를 사용하여 생성하는것을 방지 가능

## abstract class

상위 클래스이 메소드를 다양하게 이용하고 싶을때, 추상 클래스로 만들어 활용성을 높일수 있음.

## interface

class들의 타입과 메소드를 미리 만들어서 여러 class에 적용가능.
type 과는 다르게 객체의 구조를 설명하기 위해서만 사용됨
상속과는 달리 여러개의 interface를 확장가능
class가 특정 기능이나 객체를 가지게 하고 특정구조를 가지게 해준다
변수뒤에 ?를 붙여 선택적 매개변수로 만들기 가능
TS 인터페이스 관련 추가 정보: https://www.typescriptlang.org/docs/handbook/2/objects.html

## 타입가드
타입 가드를 사용하면 값으로 작업을 수행하기 전에 타입을 검사하여 런타임 오류를 방지

## typecasting
타입을 정하고 싶은 것 앞에 <타입> 지정 ex) const userInputElement = <HTMLInputElement>document.getElementById("user-input")
뒤에 타입을 as 로 하여 지정 ex) const userInputElement = document.getElementById("user-input")! as HTMLInputElement

## optional chaining
존재하는지 여부가 불확실한 변수 뒤에 ?를 붙여서 ts컴파일 에러 없이 실행가능

## null 병합 연산자
null, undefined 처리 할때 || 대신 ?? 를 이용하여 빈스트링이나 0을 빼고 처리 가능
고급 타입 관련 추가 정보: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

## Generics
Array<number> 이런식으로 어떤 값들이 들어가야 하는지 정하는 것.
프로미스도 Generics 타입으로 지정 가능
제네릭 관련 추가 정보: https://www.typescriptlang.org/docs/handbook/generics.html

## Partial
Partial<T> Partial과 제네릭 타입을 이용하여 모든 속성을 선택적으로 바꿔줌

## Readonly
선언이후 변경이 되지 않아야 할 경우 Readonly<string[]> 이처럼 지정하여 변경 방지가능

## Decorator
메타프로그래밍 가능 어노테이션과 유사, 실행순서는 bottom-top 방식
데코레이터 관련 추가 정보: https://www.typescriptlang.org/docs/handbook/decorators.html