function solution(today, terms, privacies) {
    var answer = [];
    const dateString = today;
    const [year, month, day] = dateString.split(".");
    const termObj ={}
    terms.forEach((el) => {
        let dum = el.split(" ")
        termObj[dum[0]] = new Date(year, month - dum[1]-1, day)
        })
    for(let i =0; i<privacies.length; i++){
        let spl = privacies[i].split(" ")
        if(new Date(spl[0]) <= termObj[spl[1]]){
            answer.push(i+1)
        }
    }
    return answer;
}
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))

// 날짜 String 형태로 비교시 비교가 잘안됨 new Date로 Date format으로 변환하여 작업