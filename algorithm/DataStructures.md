# 자료구조

값의 집합으로 값들은 서로 관계를 가질수 있고 적용되는 함수들을 가질수 있고 용도와 기능이 따라 상이
자료구조는 컴퓨터에 데이터를 저장하는 방법의 변형

## Arrays

1. lookup => O(1) 2. push => O(1) 3. insert => O(n) 4. delete => O(n)
   string => arr로 변경하여 푸는게 일반적으로 좋은데 문제를 한번더 보고 생각 후 작업

static Array - 길이가 정해진 배열 (Java, C#에서의 Array)
dynamic Array - 길이가 정해지지 않은 배열(JS, TS에서 선언했을때의 Array. Java,C#에서의 List)
Arrays 장점 - 빠른 lookups, push/pop, Ordered 단점 - 느린 inserts, deletes, 고정된 크기(static Array의 경우)

## Hash Tables

키, 값을 쌍으로 가지고 해쉬함수를 이용하여 키값이 Index가 되어 저장됨

1. insert => O(1) 2. lookup => O(1) 3. delete => O(1) 4. search O(1)
   메모리의 공간을 많이 사용하기 때문에 충돌이 날수 있음. 충돌이 발생하면 찾기, 삭제하는 등의 시간 복잡도가 O(n)으로 됨.

### 충돌 대처법

1. 체이닝 - Linked List를 할당하여 해시 충돌이 발생하면 연결리스트로 데이터들을 연결
2. 개방 주소법 - 해시 충돌이 일어나면 다른 버켓에 데이터를 삽입하는 방식
   2-1. 선형 탐색(Linear Probing): 해시충돌 시 다음 버켓, 혹은 몇 개를 건너뛰어 데이터를 삽입
   2-2. 제곱 탐색(Quadratic Probing): 해시충돌 시 제곱만큼 건너뛴 버켓에 데이터를 삽입(1,4,9,16..)
   2-3. 이중 해시(Double Hashing): 해시충돌 시 다른 해시함수를 한 번 더 적용한 결과를 이용
