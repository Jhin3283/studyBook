# pm2 npm start

pm2 start --name "이름" npm -- start
pm2 start npm --name "{app_name}" -- run {script_name}

# pm2 

pm2 serve <path> <port> --spa
pm2 serve build 3000 --spa

# pm2 옵션

--watch : PM2가 실행된 프로젝트의 변경사항을 감지하여 서버를 자동 재시작(reload)
만일 watch옵션시에 특정 폴더 경로는 무시해야할 때 --watch --ignore-watch="[dir]/*"

-i max(코어개수) : Node.js의 싱글 스레드를 보완하기 위한 클러스터(Cluster) 모드
-i 뒤에 코어의 개수를 입력하거나 max를 쓰면 최대 코어 개수로 클러스터링(Clustering) 된다.

--name  : 앱 이름 지정

--max-memory-restart <200MB> : 앱이 리로드 될때 최대의 메모리 지정

--log <log_path> : 로그 파일 경로 지정

-- arg1 arg2 arg3 : 스크립트에 추가 인수 전달

--restart-delay <delay in ms> : 재시작할때의 딜레이 지정

--time : 로그 남길때 프리픽스로 시간 지정

--no-autorestart : 재시작 불가하도록 설정

--cron <cron_pattern> : 주기적으로 강제 재시작이 필요할때 설정 (cron)