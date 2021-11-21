# 사용권한
ls -l 명령어를 통해 폴더나 파일의 권한 정보 확인
-rw-r--r-- || drwxr-xr-x 이런식으로 나오게 되는데 맨 첫 -,d 는 각각 not directory와 directory로 폴더는 d 파일은 -
r, w, x는 각각 read permission, write permission, execute permission으로 읽기 권한, 쓰기 권한, 실행 권한
첫 r,w,x는 user의 권한 두번째는 group 세번째는 otehr의 권한
user - 파일의 소유자
group - 여러 user의 모임
oter - 파일의 엑세스 권한이 있는 다른 user

chmod - 권한을 변경하는 명령어
OS에 로그인한 사용자와, 폴더나 파일의 소유자가 같을 경우 chmod 로 폴더나 파일의 권한을 변경
만약 OS에 로그인한 사용자와, 폴더나 파일의 소유자가 다를 경우 관리자 권한을 획득하는 명령어 sudo 를 이용해 폴더나 파일의 권한을 변경
chmod 로 권한을 변경하는 방식
1. 더하기(+), 빼기(-), 할당(=)과 액세서 유형을 표기해서 변경하는 Symbolic method
2. rwx를 3 bit로 해석하여, 숫자 3자리로 권한을 표기해서 변경하는 Absolute form

Symbolic method는 엑세스 클래스, 연산자, 엑세스 타입으로 구분
Access class  ||  operator  ||  Access Type
u (user)      ||  +(add)    ||  r(read)
g (group)     ||  -(remove) ||  w(write)
o (other)     ||=(set exact)||  x(execute)
a (all:u,g,o)
ex)chmod a=rw helloworld.js # -rw-rw-rw-
    chmod u= helloworld.js # ----rw-rw-

Absolute form은 숫자 7까지 나타내는 3 bits의 합으로 표기
Read(r) - 4
Write(w) - 2
Execute(e) -1
ex) # u=rwx (4 + 2 + 1 = 7), go=r (4 + 0 + 0 = 4)
    chmod 744 helloworld.js # -rwxr--r--

# 환경변수
export - 환경변수 확인하기 && 환경변수 임시 적용
export urclass="is good" - 새로운 환경변수 설정 `=`앞뒤에 반드시 공백이 없어야함 
echo $urclass - 환경변수의 값 확인 `$`표시는 변수라는 뜻을 터미널에 전달함
dotenv - 자바스크립트에서 환경변수 사용하기
.env 파일를 환경변수로 사용할 수 있게 도움
.env - Node.js에서 환경변수 영구 적용
환경변수를 이용해 API key, DB password와 같이 민감한 정보를 저장하고 관리가능, 서로 다른 PC 또는 여러 .env 파일에서, 같은 변수 이름에 다른 값을 할당가능
