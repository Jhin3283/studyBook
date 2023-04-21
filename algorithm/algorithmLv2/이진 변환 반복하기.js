function solution(s) {
    var answer = [];
    let delNum = 0;
    let loop = 0;
    while (s.length > 1){
        for(let i=0; i<s.length; i++){
            if(s[i] === "0"){
                delNum++
            }
        }
        s = s.replace(/0/g, '');
        let length = s.length
        let binary = length.toString(2);
        s= binary
        loop++
    }
    answer.push(loop,delNum)
    return answer;
}
// toString(2)로 이진법 변환이 핵심

const binaryString = '1010';
const decimalNumber = parseInt(binaryString, 2);

// Binary to Numberic Conversion