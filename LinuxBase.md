# CLI 기본 명령어

- pwd - 현재위치 확인하기
- mkdir - 새로운 폴더 생성하기
- ls - 특정 폴더에 포함된 파일이나 폴더 확인하기
- cd - 폴더에 진입하기
- touch - 파일 생성하기
- cat - 파일의 내용을 터미널에 출력하기
- rm - 폴더나 파일 삭제하기
- mv - 폴더나 파일의 이름을 변경, 또는 폴더나 파일의 위치 옮기기
- cp - 폴더나 파일을 복사하기
- 절대 경로 vs 상대 경로 - 절대경로 예시: /Users/[username]/helloWorld/hello/ <=> ./helloWorld/hello/ 상대경로는 현재 폴더 . 상위 폴더 ..으로 표현함
- 관리자 권한은 사용자들에게 주지 않는 권한들을 가지고 있는 것으로, 읽기전용의 파일이라도 생성, 변경, 삭제가 가능하다.
- whoami - 현재 로그인된 사용자 확인하기
- sudo - 관리자 권한 획득명령어

# ubuntu 배포시 사용 명령어

- sudo lsof -i :80 - 포트 사용여부 확인 방법
- nohup java -jar wifree_admin_api.jar > /dev/null 2>&1 & - jar 파일 백엔드 실행 방법
- ps -ef | grep java - java라는 이름으로 실행되는 pid 확인
