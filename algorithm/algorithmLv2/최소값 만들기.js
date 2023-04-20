function solution(A,B){
    var answer = 0;
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    for(let i=0; i<A.length; i++){
        answer += A[i] * B[i]
    }

    return answer;
}
// sort는 mutable 함수임. 재할당해서 효율성 떨어뜨리지 말것.. Chat GPT는 신이야...