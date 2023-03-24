## Spring Boot Auto Configuration

의존성을 보고 사용 가능한 모든 클래스를 확인 하고 일반적인 어플리케이션에 필요한 자동구성 제공

## Spring Boot Starter

Dispatcher Servlet 자동구성
내장된 Servlet 컨테이너도 자동으로 구성 기본값 Tomcat
자동 구성 에러 페이지도 존재

## Spring Boot Dev Tools
저장할때 자동 재시작 nodemon 같은 역활

## Spring Boot Actuator
dev Ops를 원활이 하기 위해 EndPoint로 정보를 주는 역활

## Spring Security
엔드포인트를 권한에 맞게 관리가 가능

## Spring VS Spring MVC VS Spring Boot

Spring Framework 핵심 - 의존성 주입, 다양한 모듈 지원
Spring MVC - 분리 접근 방식으로 웹 어플 구축 다양한 설정을 해야함
Spring Boot - 어플 구축을 빠르게 해줌. Spring MVC에서 설정하는 Dispatcher Servlet, ModelAndView, View Resolver etc.. 를 수동으로 설정하지 않아도 됨

## JDBC VS Spring JDBC
JDBC - 쿼리를 적고 자바코드를 사용해 실행가능
Spring JDBC - 쿼리를 적고 자바코드로 실행하는것은 동일하지만 적은 양의 자바코드를 이용

## JPA Vs Spring Data JPA
JPA(Hibernate) - 쿼리를 수동으로 적을 필요 없고, Entities와 Tables 매핑
Spring Data JPA - GPA(Java Persistence API)를 더 쉽게 만듬

### application.properties
Spring Boot의 속성을 넣을수 있음 (.env와 유사)
ex) server.port=8085,
coach.name=Mickey Mouse
값 주입 ex) @Value("${coach.name}")

### resources/static
고정 리소스 사용(public과 유사)
ex) Html, Css, JavaScript, images

### 주의 사항
프로그램이 JAR로 만들어질 경우 src/main/webapp 같은 디렉토리 사용금지

### resources/template
아래의 템플릿을 넣어 auto-configuration가능
- FreeMarker
- Thymeleaf
- Mustache

## Hibernate
자바 객체를 데이터베이스에 저장하는 프레임 워크 low-level SQL 사용 및 ORM
