# 작동원리

java Source code (compile)-> Java Application Bytecode (Run)-> Java Virtual Machine (Run)-> computer OS

### console 찍는법
System.out.println(찍고 싶은거)
println = print line
System.out.printf(찍고 싶은거).println()
%d 는 printf의 뒤의 변수를 값으로 넣을수 있음

## 변수 저장 과정
메모리 위치에 변수명이 Name으로 정해지고 Value에 값이 저장됨

## 변수이름 정하는 규칙
1. 숫자로 시작 X
2. Camel case
3. "-" 대신 "_" 사용

## 데이터 타입
1. 정수(32 bits) int
2. 8 bits byte
3. 16 bits short
4. 64 bits long
5. 32 bits float (숫자뒤에 f 붙여야함 ex)4.0f)
6. 64 bits double
7. char 한글자만 저장가능 'A' or 'B'
8. boolean (true, false)

## for 반복문
for(int i=1; i<=10; i++){ }

## method
[returnType] [nameOfMethod](){ }

## JVM, JDK, JRE

### JVM
Java Virtual Machine
byte Code를 OS맞춰 변환

### JRE
Java Runtime Environment
Libraries + Other Components + JVM

### JDK
Java Developer Kit
JRE + Compilers + Debuggers

# OOP(객체 지향 프로그래밍)

OOP - Object-oriented programming의 약자로 절차 지향 프로그래밍과 다르게 데이터와 기능을 한 곳에 묶어서 처리.

객체 지향 프로그래밍 기본 컨셉

1. 캡슐화 - 속성과 메소드를 하나의 단위로 묶어서 느슨한 결합. 내부 속성과 메소드가 외부로 노출되지 않는 은닉화.

- 장점: 코드가 복잡하지 않게 하고, 재사용성을 높임.
  느슨한 결합 - 코드가 상징하는 실제 모습과 닯게 코드를 결합하는 것

- getter와 setter를 만들어서 진행

2. 상속 - 부모 클래스의 특징을 자식 클래스가 물려받는 것

- 장점: 불필요한 코드를 줄여 재사용성 높임

3. 추상화 - 내부 구현은 복잡하지만, 외부에 노출되는 부분은 단순하게 만드는 것.

- 장점: 코드가 복잡하지 않게 하고, 단순화된 사용으로 변화에 대한 영향 최소화
  인터페이스 - 클래스 정의시, 메소드와 속성만 정의한 것. 추상화의 본질.
  캡슐화와 추상화의 차이 - 캡슐화는 은닉에 포커스. 추상화는 사용자에게 필요하지 않은 메소드 노출시키지 않고, 단순한 이름으로 정의하는 것에 포커스

4. 다형성 - 다양한 형태를 가질수 있는 것

- 장점: 동일한 메소드에 대해 if/else if와 같은 조건문 대신 객체의 특성에 맞게 작성 가능

## do while loop
do { 실핼될 사항 } while (반복될 조건)

- while문과 차이는 코드가 한번이라도 실행되는지의 여부에 따라 다름

## break continue
javascript와 동일 반복문 break Or continue

## 참조 자료형
Class가 참조 자료형 Class는 Heap으로 참조형 저장되며, Class내 참조 변수는 stack으로 Class정보를 포함하여 쌓이게 됨.

## String
특정위치 조회 - str.chartAt(index)
문자열 자르기 - str.substring(index,index)
문자열 길이 - str.length()
문자 인덱스 찾기 - str.indexOf(특정문자)
문자 인덱스 찾기 뒤에서부터 - str.lastIndexOf(특정문자)
문자 포함 여부 - str.contains(특정문자)
문자열 시작여부 - str.startsWith(특정문자)
문자열 끝여부 - str.endsWith(특정문자)
비어있는지 여부 - str.isEmpty()
문자열 비교 - str.equals(특정문자)
문자열 비교 대소문자 구분X - str.equalsIgnoreCase(특정문자)
문자열 합치기 - str.concat(합칠 문자)
문자열 대문자 - str.toUpperCase()
문자열 소문자 - str.toLowerCase()
문자열 공백없애기 - str.trim()
문자열 사이에 추가 - String.join(",", "A", "B", "C")
문자열 변경 - str.replace("a","z")

## StringBuffer
기존 String은 수정 불가 StringBuffer는 수정 가능

## StringBuilder
멀티스레딩으로 StringBuffer와 차이

## Wrapper Classes
자바 API 클래스중 하나
기존 타입의 데이터를 객체로 취급

기본 타입 || 래퍼 클래스
byte || Byte
short || Short
int || Integer
ling || Long
float || Float
double || Double
char || Character
boolean || Boolean

Integer i1 = new Integer(5)
Integer i2 = new Integer(5)
i1 == i2 //false
Integer i3 = Integer.valueOf(5)
Integer i4 = Integer.valueOf(5)
i3 == i4 //true

## 일급 컬랙션
콜렉션을 wrapping 할 때, 그 외의 다른 멤버 변수가 없는 상태
Collection들을 한번 Wrapping 한 컬렉션

## Date
LocalDate today = LocalDate.now()
today.getYear()
LocalDate.of(특정 년,월,일)
today.withYear(특정 년)
today.withDayOfMonth(특정 일)
today.isBefore(특정 날짜) Or today.isAfter(특정 날짜) 를통해 시간 판별 가능

## Eclipse 팁
이클립스에서 지원 메소드 확인 Ctrl(Command) + O
