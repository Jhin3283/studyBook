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