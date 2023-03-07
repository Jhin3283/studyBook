## 스프링 시작하기
start.spring.io

## 강한 결합 VS 느슨한 결합
무언가를 변경하는데 얼마나 많은 작업이 필요한지 나타내는게 결합임. // ex) 자동차 - 엔진 // 강한결합 자동차 - 타이어 // 느슨한 결합
가능한 느슨한 결합을 하는것이 유리함.

## 스프링 빈 사용
JVM실행하고 Spring context 만들고 구성 클래스 빈 사용.
@Bean - 스프링 컨테이너에 의해 관리됨 getBean("")을 이용하여 불러올수 있음.
스프링 컨텍스트에서 빈 회수 방법 - getBean("name")  OR  ClassName.class
@Bean(name = "")을 통해 빈에 사용자 지정 이름구성 가능
스프링이 관리하는 기존 빈을 사용하여 새로운 빈을 만들수도 있음.

## record
getter, setter, 생성자 만드는게 자동으로 됨. 맴버 변수만 입력하면 됨.

## 스프링 컨테이너
스프링 빈 및 그의 수명 주기를 관리하는 컨테이너. 클래스를 입력받아 러닝 시스템을 만드는 것
자바 클래스를 만들고 구성 만들면 IOC(제어의 역전)컨테이너(=스프링 컨테이너, 스프링컨텍스트)가 런타임 시스템을 만듬
종류: Bean Factory(기본 스프링 컨테이너), Application Context(웹 어플리케이션 구축 중, 국제화 기능이 필요한 경우 사용, 스프링 AOP(관점 지향 프로그래밍)통합)

## Java Bean Vs POJO VS Spring Bean
POJO(Plain Old Java Object) - 오래된 방식의 간단한 자바 오브젝트 모든 자바 객체는 POJO
Java Bean - EJB(Enterprise Java Bean) 제약사항 1. public no-arg constructor 2. getter, setter있어야함 3. 직렬화 가능 - implements Serializable
Spring Bean - 스프링 내부에 빈을 말함.

## Bean auto 와이어링
Primary - 여러개의 Bean에서 우선순위를 정할수 있음.
Qualifier - 여러개의 Bean에서 사용 정할수 있음. (Alias와 유사)

## 원하는 객체 찾기
@Component 어노테이션과 @ComponentScan 어노테이션을 통해 인터페이스를 만들어 자동으로 추가 가능.