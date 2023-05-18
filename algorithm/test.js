function solution(plans) {
  var answer = [];
  plans.map((el) => {
    let dum = el[1].split(":")
    el[1] = Number(dum[0])*60 + Number(dum[1])})
    plans.sort((a,b) => a[1] - b[1])
    let stack = [plans.shift()];
  for(let i=0; i<plans.length; i++){
    let data;
    if(stack.length === 0){
      data = [0,Infinity,0];
    } else {
      data = stack[stack.length -1]
    }
    if(plans[i][1] >= data[1] + Number(data[2])){
      answer.push(stack.pop()[0])
      answer.push(plans[i][0])
    } else {
      stack.push(plans[i])
    }
  }
  if(stack.length !== 0){
    for(let j=stack.length; j>0; j--){
      answer.push(stack.pop()[0])
    }
  }
  console.log(stack)
  console.log(answer)
  return answer;
}
solution(	[["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]])