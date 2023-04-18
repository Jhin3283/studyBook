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