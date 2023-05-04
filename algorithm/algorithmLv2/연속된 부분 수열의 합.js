function solution(sequence, k) {
    const answer = [];
    let [l, r] = [0, 0]
    let num = sequence[l]
    while (r < sequence.length){
      if(num < k){
          num += sequence[++r]
      } else if (num > k){
          num -= sequence[l++]
      } else {
          answer.push([l,r])
          num += sequence[++r]
          num -= sequence[l++]
      }
    }
    return answer.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
  }

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));

// ++r은 변수의 값을 증가시킨 후 연산을 처리하고, r++는 연산을 처리한 후 변수의 값을 증가시킴
// l과 r의 더한값이 k보다 작을 경우 r을 이동, k 보다 클 경우 l을 이동시킴