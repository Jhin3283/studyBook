function solution(players, callings) {
    for(let i = 0; i<callings.length; i++){
        let index = players.indexOf(callings[i])
        let dum = players[index - 1]
        players[index -1] = players[index]
        players[index] = dum
    }
    return players;
}

// 배열을 이용해서 인덱스 값을 이용해서 작업할 경우 O(n^2)로 됨. 객체 형태로 바꿔야 함

function solution(players, callings){
    let obj ={};
    players.forEach((e,idx)=> {
        obj[e] = idx
    })
    for(let i =0; i<callings.length; i++){
        let idx = obj[callings[i]]
        let player = players[idx - 1]
        players[idx - 1] = callings[i]
        players[idx] = player
        obj[callings[i]] --
        obj[player]++;
    }
    return players
}
