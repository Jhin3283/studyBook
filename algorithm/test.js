function solution(s, skip, index) {
  var answer = '';
  let alpabat = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
  ,"r","s","t","u","v","w","x","y","z"]
  for(let i=0; i<skip.length; i++){
    let idx = alpabat.indexOf(skip[i])
    if(idx !== -1){
      alpabat.splice(idx,1)
    }
  }
  let length = alpabat.length
  for(let i=0; i<s.length; i++){
    let idx = alpabat.indexOf(s[i])+index
    console.log(idx - length)
    console.log(idx % length)
    // if(idx + index <= length){
      answer += alpabat[idx % length]
    // } else {
    //   answer += alpabat[(idx + index - length)]
    // }
  }
  return answer;
}
solution("uvwxyz", "wbqd", 5)