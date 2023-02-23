# 데이터 베이스 필요성

In-Memory - 프로그램이 실행될때만 존재하는 데이터로 예기치 못한 상황에서 데이터 보호 X 프로그램 종료된 상태에서 데이터를 원하는 시간에 받아올수 없고, 데이터의 수명이 프로그램 수명에 의존하게됨
File I/O - 파일을 읽는 방식으로 작동하는 형태를 말함. 엑셀 시트나 CSV 같은 파일의 형태는 In-Memory에 비해 데이터를 저장하는 방식으로 적절하나 한계 존재

1.  데이터를 필요로 할때마다 전체 파일을 매번 읽어야하므로, 파일의 크기가 커지면 비효율적임
2.  파일이 손상되거나, 여러개의 파일을 다뤄야할때, 복잡하고 데이터량이 많아질수록 데이터 불러들이는 작업이 힘듬
    반면, 관계형 데이터 베이스에서는 하나의 CSV파일이나 엑셀 시트를 한 개의 테이블로 저장 가능, 한번에 여러개의 테이블을 가질수 있기때문에 SQL을 통해 데이터 불러오기 수월함

# SQL

- Structured Query Language (SQL)은 데이터베이스 언어로, 관계형 데이터베이스에서 주로 사용
- 데이터베이스에 쿼리를 보내 원하는 데이터를 가져오거나 삽입. 데이터가 구조화된 테이블을 사용하는 데이터베이스에서 활용 가능
- SQL을 사용하기 위해서는 데이터가 구조가 고정되어있어야함
  데이터의 구조가 고정되어 있지 않은 데이터베이스를 NoSQL라고함. 관계형 데이터베이스와는 달리, 테이블을 사용하지 않고 데이터를 다른 형태로 저장함.

# 쿼리

- 저장되어 있는 데이터를 필터하기 위한 질의문

# 데이터베이스 관련 명령어

데이터베이스 생성 - CREATE DATABASE <데이터베이스*이름>;
데이터베이스 사용 - USE <데이터베이스*이름>;
테이블 정보 확인 - DESCRIBE <테이블*이름>;
테이블 생성 - CREATE TABLE <테이블*이름> (
id int PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
email varchar(255)
);

# SQL 명령어

SELECT 특성*1 - 데이터셋에 포함될 특성을 특정(SELECT) \* 는 와일드카드 (wildcard) 로 전부 선택할 때에 사용

SELECT 특성\_1 FROM 테이블*이름 - FROM 뒤에는 결과를 도출해낼 데이터베이스 테이블을 명시. 테이블과 관련한 작업에는 반드시 입력하여야 함.

SELECT 특성*1, 특성\_2 FROM 테이블*이름 WHERE 특성*1 = "특정 값" - WHERE은 필터 역할을 하는 쿼리문으로 선택적으로 사용가능

특정 값과 비교하여 필터를 할때 '<','>','<=','>='를 사용함. 문자열에서 특정 값과 비슷한 값들을 필터할 때 'LIKE'와 '\%' 혹은 '\*' 를 사용. 리스트의 값들과 일치하는 데이터를 필터할 때에는 'IN' 을 사용. 값이 없는 경우 'NULL' 을 찾을 때에는 'IS' 와 같이 사용. 값이 없는 경우를 제외할 때에는 'NOT' 을 추가해 이용

SELECT \* FROM 테이블*이름 ORDER BY 특성*1 - ORDER BY는 돌려받는 데이터 결과를 어떤기준으로 정렬하여 출력할지 결정함. 선택적으로 사용가능. DESC를 뒤에 붙여서 내림차순정렬 기본: 오름차순

SELECT \* FROM 테이블*이름 LIMIT 200 - LIMIT는 결과로 출력할 데이터의 개수를 정할수 있음. 선택적으로 사용가능. 쿼리문에서 사용할때, 가장 마지막에 추가

SELECT DISTINCT 특성*1 FROM 테이블*이름 - DISTINCT는 유니크한 값을 받고싶을때 사용

SELECT _ FROM 테이블\_1 JOIN 테이블\_2 ON 테이블\_1.특성\_A = 테이블\_2.특성\_B - INNER JOIN 이나 JOIN으로 두 개 이상의 테이블을 서로 묶어서 하나의 결과 집합

SELECT _ FROM 테이블\_1 LEFT OUTER JOIN 테이블\_2 ON 테이블\_1.특성\_A = 테이블\_2.특성\_B - OUTER JOIN은 조건에 부합하지 않는 행까지도 포함시켜 결합

LEFT JOIN은 왼쪽 테이블의 것은 조건에 부합하지 않더라도 모두 결합 RIGHT JOIN은 오른쪽 테이블의 것은 조건에 부합하지 않더라도 모두 결합

```
SELECT <열 목록>
FROM <첫번째 테이블 (LEFT 테이블)>
    <LEFT | RIGHT | FULL> OUTER JOIN <두번째 테이블 (RIGHT 테이블)>
                          ON <조인될 조건>
[WHERE 검색 조건]
```

# ACID

트랜잭션 - 여러 개의 작업을 하나로 묶은 실행 유닛. 각 트랜잭션은 하나의 특정 작업으로 시작을 해 묶여 있는 모든 작업을 다 완료해야 정상적으로 종료. 성공 또는 실패 라는 두 개의 결과만 존재하는 트랜잭션은, 미완료된 작업 없이 모든 작업을 성공해야함
ACID는 데이터베이스 내에서 일어나는 하나의 트랜잭션(transaction)의 안전성을 보장하기 위해 필요한 성질
Atomicity(원자성) - 원자성은 하나의 트랜잭션에 속해있는 모든 작업이 전부 성공하거나 전부 실패해서 결과를 예측할 수 있어야 함
Consistency(일관성) - 하나의 트랜잭션 이전과 이후, 데이터베이스의 상태는 이전과 같이 유효해야 함. 트랜잭션이 일어난 이후의 데이터베이스는 데이터베이스의 제약이나 규칙을 만족해야 함
Isolation(격리성, 고립성) - 모든 트랜잭션은 다른 트랜잭션으로부터 독립되어야 함. 동시에 여러 개의 트랜잭션들이 수행될 때, 각 트랜잭션은 고립(격리) 되어 있어 연속으로 실행된 것과 동일한 결과여야 함
Durability(지속성) - 하나의 트랜잭션이 성공적으로 수행되었다면, 해당 트랜잭션에 대한 로그가 남아야 함. 만약 런타임 오류나 시스템 오류가 발생하더라도, 해당 기록은 영구적이어야 함

# SQL vs NoSQL

관계형 데이터베이스는 SQL을 기반, 비관계형 데이터베이스는 NoSQL로 데이터를 다룸. SQL과 NoSQL은 만들어진 방식, 저장하는 정보의 종류, 그리고 저장하는 방법 등에 차이가 있음.
관계형 데이터베이스에서는 테이블의 구조와 데이터 타입 등을 사전에 정의하고, 테이블에 정의된 내용에 알맞은 형태의 데이터만 삽입할 수 있음. 행(row)과 열(column)로 구성된 테이블에 데이터를 저장. 각 열은 하나의 속성에 대한 정보를 저장하고, 행에는 각 열의 데이터 형식에 맞는 데이터가 저장됨. 관계형 데이터베이스에서는 테이블 간의 관계를 직관적으로 파악가능
NoSQL은 주로 데이터가 고정되어 있지 않은 데이터베이스를 가리킴. NoSQL에 스키마가 반드시 없는 것은 아님. 관계형 데이터베이스에서는 데이터를 입력할 때 스키마에 맞게 입력해야 하는 반면, NoSQL에서는 데이터를 읽어올 때 스키마에 따라 데이터를 읽어옴. 데이터를 입력하는 방식에 따라, 데이터를 읽어올 때 영향을 미침
데이터 저장(Storage)

- NoSQL은 key-value, document, wide-column, graph 등의 방식으로 데이터를 저장
- 관계형 데이터베이스는 SQL을 이용해서 데이터를 테이블에 저장. 미리 작성된 스키마를 기반으로 정해진 형식에 맞게 데이터를 저장해야 함
  스키마(Schema)
- SQL을 사용하려면, 고정된 형식의 스키마가 필요함. 처리하려는 데이터 속성별로 열(column)에 대한 정보를 미리 정해두어야 함. 스키마는 나중에 변경할 수 있지만, 데이터베이스 전체를 수정하거나 오프라인(down-time)으로 전환해야함.
- NoSQL은 관계형 데이터베이스보다 동적으로 스키마의 형태를 관리할 수 있음. 행을 추가할 때 즉시 새로운 열을 추가할 수 있고, 개별 속성에 대해서 모든 열에 대한 데이터를 반드시 입력하지 않아도 됨

쿼리(Querying)

- 관계형 데이터베이스는 정보를 요청할 때, SQL과 같이 구조화된 쿼리 언어를 사용함
- 비관계형 데이터베이스는 구조화되지 않은 쿼리 언어로도 데이터 요청이 가능

확장성(Scalability)

- 일반적으로 SQL 기반의 관계형 데이터베이스는 수직적으로 확장
- NoSQL로 구성된 데이터베이스는 수평적으로 확장

SQL 기반의 관계형 데이터베이스를 사용하는 케이스

1. 데이터베이스의 ACID 성질을 준수해야 하는 경우
2. 소프트웨어에 사용되는 데이터가 구조적이고 일관적인 경우

NoSQL 기반의 비관계형 데이터베이스를 사용하는 케이스

1. 데이터의 구조가 거의 또는 전혀 없는 대용량의 데이터를 저장하는 경우
2. 클라우드 컴퓨팅 및 저장 공간을 최대한 활용하는 경우
3. 빠르게 서비스를 구축하는 과정에서 데이터 구조를 자주 업데이트하는 경우

# NoSQL

NoSQL 기반의 비관계형 데이터베이스는,

- Key-Value 타입 : 속성을 Key-Value의 쌍으로 나타내는 데이터를 배열의 형태로 저장. Key는 속성 이름, Value는 속성에 연결된 데이터값
- 문서형(Document) 데이터베이스 : 데이터를 테이블이 아닌 문서처럼 저장하는 데이터베이스를 의미함. 각각의 문서는 하나의 속성에 대한 데이터를 가지고 있고, 컬렉션이라고 하는 그룹으로 묶어서 관리함
- Wide-Column 데이터베이스 : 데이터베이스의 열(column)에 대한 데이터를 집중적으로 관리하는 데이터베이스. 각 열에는 key-value 형식으로 데이터가 저장되고, 컬럼 패밀리(column families)라고 하는 열의 집합체 단위로 데이터를 처리할 수 있음. 하나의 행에 많은 열을 포함할 수 있어 유연성이 높고, 데이터 처리에 필요한 열을 유연하게 선택할 수 있다는 점에서 규모가 큰 데이터 분석에 주로 사용되는 데이터베이스 형식임
- 그래프(Graph) 데이터베이스 : 자료구조의 그래프와 비슷한 형식으로 데이터 간의 관계를 구성하는 데이터베이스. 노드(nodes)에 속성별(entities)로 데이터를 저장. 각 노드 간 관계는 선(edge)으로 표현함

# 스키마(schema)

스키마(Schema) - 데이터베이스에서 데이터 구성 방식과 서로 다른 엔티티 간의 관계
엔티티(Entity) - 고유한 정보의 단위. 데이터베이스에서 테이블
필드(Field) - 해당 엔티티의 특성 설명. 행렬에서 열에 해당. 테이블에 저장된 모든항목에 해당필드가 포함됨
레코드(Record) - 테이블에 저장된 항목. 행렬에서 행에 해당.

# 관계형 데이터베이스

관계형 데이터베이스 - 테이블을 사용하는 데이터베이스. 구조화된 데이터는 하나의 테이블로 표현가능.
데이터(data) - 각 항목에 저장되는 값
테이블(table; 또는 relation) - 사전에 정의된 열의 데이터 타입대로 작성된 데이터가 행으로 축적됨
칼럼(column; 또는 field) - 테이블의 한 열
레코드(record; 또는 tuple) - 테이블의 한 행에 저장된 데이터
키(key) - 테이블의 각 레코드를 구분할 수 있는 값. 각 레코드마다 고유한 값을 가지고, 기본키(primary key)와 외래키(foreign key) 등이 있음.

# 관계종류

1. 1:1 관계 - 하나의 레코드가 다른 테이블의 레코드 한 개와 연결된 경우
2. 1:N 관계 - 하나의 레코드가 서로 다른 여러 개의 레코드와 연결된 경우
3. N:N 관계 - 여러 개의 레코드가 다른 테이블의 여러 개의 레코드와 관계가 있는 경우
4. 자기참조 관계 - 테이블 내에서 관계가 있는 경우

# SQL 내장함수

GROUP BY - 데이터를 조회할 때 그룹으로 묶어서 조회 ex) SELECT _ FROM customers GROUP BY State; => customers 테이블의 모든 레코드를 State에 따라 그룹화
HAVING - GROUP BY 로 조회된 결과를 필터링 ex) SELECT CustomerId, AVG(Total) FROM invoices GROUP BY CustomerId HAVING AVG(Total) > 6.00 => invoices 테이블을 CustomerId로 그룹화하고 그 평균이 6을 초과한 결과를 조회
COUNT() - 레코드의 개수를 헤아릴 때 사용 ex) SELECT State, COUNT(_) FROM customers GROUP BY State; => 각 State에 해당하는 레코드의 개수를 확인
SUM() - 레코드의 합을 리턴 ex) SELECT InvoiceId, SUM(UnitPrice) FROM invoice_items GROUP BY InvoiceId; => invoice_items 테이블에서 InvoiceId 필드를 기준으로 그룹하고, UnitPrice 필드 값의 합을 구함
AVG() - 레코드의 평균값을 계산하는 함수 ex) SELECT TrackId, AVG(UnitPrice) FROM invoice_items GROUP BY TrackId; => invoice_items 테이블에서 TrackId 필드를 기준으로 그룹하고, UnitPrice 필드 값의 평균을 구함
MAX(), MIN() - 레코드의 최댓값과 최솟값을 리턴
SELECT 실행 순서 FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY

# MySQL

## Service Mysql
시작 – service mysql start
재시작 – service mysql restart
정지 – service mysql stop
상태확인 – service mysql status

## 유저 관리

### 접속
mysql -u root -p

### 인증모드 확인
SELECT user,plugin,host FROM mysql.user;

### 비밀번호 변경
update user set password=PASSWORD('변경할 비밀번호') where user='root';

### 삭제
delete from user where user='root';
flush privileges;

### 생성
create user 'root'@'localhost' identified by 'password';

### DB의 권한 부여
grant all privileges on DB명.* to 'root'@'localhost';

### 계정권한 확인
show grants for 'root'@'localhost';

## sql_mode

### 조회
select @@sql_mode;

### 수정
set @@session.sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

set @@sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

set @@global.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

## database

### table명 변경
rename table <table명> to <바꿀table명>

## CRUD

### Create
insert into <table명> (colum1, colum2, colum3) values("value1","value2","value3");

### Read
select <검색하고 싶은거 colum> from <table명> where (조건) order by (기준) limit (숫자);

### update
update <table명> set (colum = value) where (조건);

### delete
delete from <table명> where (조건);

### left join
select <검색하고 싶은거 colum> {as (지정하고 싶은 이름)} from <table명> left join <table명> on <합성 조건>
