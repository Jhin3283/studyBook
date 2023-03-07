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
Qualifier - 여러개의 Bean에서 사용 정할수 있음. (Alias와 유사) // ex) public GameRunner(@Qualifier("SuperContraGame")GamingConsole game) {
		this.game = game;
	}
Primary Vs Qualifier => 클래스의 입장에서 어떤 의존성을 사용할지 생각해야함.
Primary - 다수의 빈이 후보군에 속할 경우 부여하는 속성 // ex)
class ComplexAlgorithm
    @Autowired @Qualifier("Spacific")
    private SortingAlgorithm spacificAlgorithm;
Qualifier - 자동 와이어링될 특정 빈에 부여 // ex)
class AnotherComplexAlgorithm
    @Autowired
    private SortingAlgorithm algorithm;

## 원하는 객체 찾기
@Component 어노테이션과 @ComponentScan 어노테이션을 통해 인터페이스를 만들어 자동으로 추가 가능.
@Component도 Primary, Qualifier사용 가능.

## 의존성 주입 방법
1. 생성자 기반 2. 세터 기반 3. 필드 기반
필드 주입 방식은 @Autowired필드에서 이용하여 의존성 주입하는 방식
모든 의존성을 생성자로 만들면 @Autowired 없이 스프링은 객체 생성시 자동으로 생성자를 사용하기 때문 이용가능.
스프링에서는 생성자 기반 주입 방식 추천
의존성 주입시 프로그래머에서 스프링 프레임워크로 제어권이 넘어가고 IOC가 됨.
스프링 빈에 대한 의존성을 와이어링하는 과정 전체를 Autowiring이라고 함.

## @Coponent Vs @Bean
모든 자바클래스에 사용|| 특정 메소드 위에만 사용
어노테이션만 추가하여 사용 || 코드 전체를 작성
필드,세터,생성자로 Autowiring || 특정 메소드 호출하여 Autowiring
스프링 프레임워크가 Bean생성 || 프로그래머가 직접 코드 작성하여 Bean생성
일반적으로는 @Component 사용. Bean생성 전 작업 많거나 스프링 시큐리티같은 서드파티 라이브러리를 위한 Bean 생성시 @Bean 사용.

## @Lazy
스프링 Bean의 기본 초기화는 Eager(이른 초기화)인데, @Lazy 어노테이션을 사용하면 사용하기 전 초기화가 가능.
@Configuration, @Component에 사용가능.
Bean이 app에서 매우 적게 사용될때 사용.

## @Scope
싱글톤 - 스프링 IOC 컨테이너마다 1개의 객체 인스턴스
프로토타입 - 많은 객체 인스턴스가 스프링 IOC 컨테이너마다 생성 가능
리퀘스트 -