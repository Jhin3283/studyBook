function solution(N, stages) {
  var answer = [];
  score = {};
  for (let i = 1; i < N + 1; i++) {
    let count = 0;
    let range = stages.length;
    for (el of stages) {
      if (el === i) {
        count++;
      }
    }
    stages = stages.filter((el) => el !== i);
    score[i] = count / range;
  }
  let dum = Object.entries(score).sort((a, b) => {
    return b[1] - a[1];
  });
  answer = dum.map((el) => Number(el[0]));
  return answer;
}

// Object.entries로 객체를 이중배열로 제작하여 비교