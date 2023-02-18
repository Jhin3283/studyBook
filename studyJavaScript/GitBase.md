# Git
Git - 소스 코드 기록을 관리하고 추적할 수 있는 분산형 버전 관리 시스템
Github - Git repository를 관리할수 있는 클라우드 기반 서비스
Git repository - Git으로 관리되는 폴더
Git repository 는 Remote Repository와 Local Repository 두 종류의 저장소를 제공함 작업 - Local Repository, 작업한 코드공유 - Remote Repository에 업로드, 다른 사람이 Remote Repository에 올려 놓은 소스 코드를 내 Local Repository 로 가지고 올 수도 있음

# 혼자 작업할 경우
fork => git clone => 수정 => git add => git commit => git push
git add <파일명> || .(모든파일) 가능
git commit -m '메세지' 로 변경내용 커밋 가능

# 함께 작업할 경우
git remote add origin <Repository 주소> => git remote add pair <Repository 주소> => git remote -v : Local Repository와 연결된 모든 Remote Repository확인) => git pull pair <branch> => 수정 => git add => git commit => git push

# git add 취소하기

$ git add *

$ git status
On branch master
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)
  renamed:    README.md -> README
  modified:   CONTRIBUTING.md

# git commit 취소하기

$ git log // commit 목록 확인

[방법 1] commit을 취소하고 해당 파일들은 staged 상태로 워킹 디렉터리에 보존
$ git reset --soft HEAD^

[방법 2] commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에 보존
$ git reset --mixed HEAD^ // 기본 옵션
$ git reset HEAD^ // 위와 동일
$ git reset HEAD~2 // 마지막 2개의 commit을 취소

[방법 3] commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에서 삭제
$ git reset --hard HEAD^

# commit message 변경하기

$ git commit --amend

# 강제 Push

$ git push origin [branch name] -f
또는
$ git push origin +[branch name]