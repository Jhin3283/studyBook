function solution(book_time) {
    var answer = 1;
    book_time.sort();
    function translate(str){
        let splited = str.split(":")
        return Number(splited[0]) * 60 + Number(splited[1])
      }
    let stack = [translate(book_time[0][1]) + 10];
    for(let i=1; i<book_time.length; i++){
      const bool = stack.findIndex((e) => e <= translate(book_time[i][0]))
      if(bool === -1){
        stack.push(translate(book_time[i][1])+10)
        answer++
     } stack[bool] = translate(book_time[i][1])+10
    }
    return answer;
  }
  solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]])

 /* HH:mm 형태의 String이기 때문에 비교가 어려워 분의 형태로 변환하는 함수 제작
  sort로 정렬시 아무조건 없을때 오름차순으로 정렬됨, 이문제에서의 비교는 이처럼 해주면됨.
  book_time.sort((a,b) => {
    if(a[0] > b[0]) return 1;
    else if(a[0] < b[0] ) return -1;
    return 0;
  });  */