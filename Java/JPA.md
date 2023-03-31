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
Column 어노테이션 사용가능한데 안쓰면 자바의 선언된 이름과 같은 이름으로 매핑
