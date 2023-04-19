function solution(s){
    let num = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === "("){
            num ++
        } else {
            num --
        } if (num < 0) return false;
    }
    if(num === 0){
        return true;
    } else {
    return false;
    }
}

// 문자열을 순서대로 queue하여 배열의 반복문 보다 효율성 높일수 있음.