function solution(name, yearning, photo) {
    var answer = [];
    let score = {};
    for(let i=0; i<name.length; i++){
        score[name[i]] = yearning[i]
    }
    for(let i =0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            if(j === 0){
                answer[i] = 0
            }
            let isHas = (score[photo[i][j]] !== undefined)
            if(isHas){
                answer[i] += score[photo[i][j]]
            }
        }
    }
    return answer;
}