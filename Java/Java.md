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
