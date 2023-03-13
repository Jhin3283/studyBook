function solution(lottos, win_nums) {
    var answer = [];
    let max = 0;
    let min = 0;
    let count = 0;
    for (let i = 0; i < lottos.length; i++) {
      if (lottos[i] === 0) {
        max++;
      }
      for (let j = 0; j < win_nums.length; j++) {
        if (lottos[i] === win_nums[j]) {
          count++;
        }
      }
    }
    if (count === 0) {
      min = 1;
    }
    if (count === 0 && max === 0) {
      max = 1;
    }
    answer.push(7 - max - count);
    answer.push(7 - count - min);

    return answer;
  }