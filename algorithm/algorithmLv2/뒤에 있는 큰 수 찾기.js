function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1)
    let stack = [];
    for(let i=0; i<numbers.length; i++){
        while(stack.length && numbers[stack[stack.length-1]] < numbers[i] ){
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i)
    }
    return answer;
}

// 이중 for문 사용시 효율성 문제로 작동 안됨