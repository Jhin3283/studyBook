function solution(n, m, section) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(1);
  }
  for (let i = 0; i < section.length; i++) {
    arr[section[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = 0; j < m; j++) {
        arr[i + j] = 1;
      }
      answer++;
    }
  }
  return answer;
}
