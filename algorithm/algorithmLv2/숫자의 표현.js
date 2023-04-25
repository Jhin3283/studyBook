function solution(n) {
    var answer = 0;
    for(let i=1; i<= n; i++){
        let num = i;
        for(let j= i+1; j<= n; j++){
            if(num >= n) {
                break;
            } else {
                num += j
            }
        }
        if(num === n){
            answer++
        }
    }
    return answer;
}