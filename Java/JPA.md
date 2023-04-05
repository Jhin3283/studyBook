# JPA annotation

## class to database table Map
@Entity
@Table(name="student")
Public class Student {
}
Entity 어노테이션 사용
Table 어노테이션으로 매핑될 이름지정 가능, 미사용시 자바 클래스네임과 같은 테이블 매핑

## fields to database columns Map
@Id
@Column(name="id")
private int id;

@Column(name="first_name")
private int firstName;
Column 어노테이션 사용가능한데 미사용시 자바의 선언된 이름과 같은 이름으로 매핑

## JPA Primary Key
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="id")
private int id;
@Id로 id지정 후 생성 형식을 아래의 형식으로 지정하여 PK로 이용가능

strategy 기타 설명
1. GenerationType.AUTO - 특정 데이터베이스를 적절하게 선택
2. GenerationType.IDENTITY - 데이터베이스의 identity column을 PK로 할당 (일반적으로 좋음)
3. GenerationType.SEQUENCE - 데이터베이스 시퀀스를 이용하여 PK로 할당
4. GenerationType.TABLE - 데이터베이스 테이블을 이용해 기본키를 할당

### DAO
Data Access Object의 약자로 App과 DB사이에 도우미 클래스로 JPA Entity 매니저가 필요
DAO <-> Entity Manager <-> Data Source <-> DB

### DAO 없이 JpaRepository interface 이용
public interface EmployeeRepository extends JpaRepository<Entity type, primary key>
@Transactional 어노테이션도 Jpa에서 자동으로 해줌

### Spring Security Model
보안을 위한 프레임워크 Servlet filter를 이용해 구현됨.
Servlet Filters - HTTP Request의 pre-process과 post-process에 사용됨
