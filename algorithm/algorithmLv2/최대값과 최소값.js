function solution(s) {
    var answer = '';
    let strArr = s.split(" ")
    strArr.forEach((e,idx) => {
        strArr[idx] = Number(e)
    })
    let topNum = Math.max(...strArr)
    let downNum = Math.min(...strArr)
    answer = String(downNum + " " + topNum)
    return answer;
}

// Math.max() 와 min() 에 배열을 넣을때 스프레드 연산자로 처리해줘야 적용됨