# 자료구조
값의 집합으로 값들은 서로 관계를 가질수 있고 적용되는 함수들을 가질수 있고 용도와 기능이 따라 상이
자료구조는 컴퓨터에 데이터를 저장하는 방법의 변형

## Arrays
1. lookup => O(1) 2. push => O(1) 3. insert => O(n) 4. delete => O(n)
string => arr로 변경하여 푸는게 일반적으로 좋은데 문제를 한번더 보고 생각 후 작업

static Array - 길이가 정해진 배열 (Java, C#에서의 Array)
dynamic Array - 길이가 정해지지 않은 배열(JS, TS에서 선언했을때의 Array. Java,C#에서의 List)
Arrays 장점 - 빠른 lookups, push/pop, Ordered  단점 - 느린 inserts, deletes, 고정된 크기(static Array의 경우)

## Hash Tables
키, 값을 쌍으로 가지고 해쉬함수를 이용하여 키값이 Index가 되어 저장됨