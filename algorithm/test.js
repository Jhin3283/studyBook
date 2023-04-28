function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1)
    let stack = [];
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[stack[stack.length-1]], "compare Num")
        while(stack.length && numbers[stack[stack.length-1]] < numbers[i] ){
            answer[stack.pop()] = numbers[i];
            console.log(numbers[i],"Push Num")
        }
        stack.push(i)
    }
    return answer;
}

console.log(solution([2, 3, 3, 5]))