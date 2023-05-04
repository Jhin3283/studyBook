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
