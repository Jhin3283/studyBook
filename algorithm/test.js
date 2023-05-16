function solution(targets) {
  var answer = 0;
  targets.sort((a, b) => {
    if (a[1] == b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
});
  let max = -1
  for(let i=0; i<targets.length; i++){
    let left = targets[i][0];
    let right = targets[i][1];
    if(left >= max){
      answer++
      max = right
    }
  }
  return answer;
}

solution([[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]])