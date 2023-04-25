function solution(wallpaper) {
    var answer = [];
    let grape = [];
    let start = [];
    let end = [];
    for(raw of wallpaper){
        grape.push([])
    }
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                grape[i][j] = 1;
            } else{
                grape[i][j] = 0;
            }
        }
    }
    console.log(grape)
    for(let i=0; i<grape[0].length; i++){
        let loop = false
        for(let j=0; j<grape.length; j++){
            if(grape[j][i] === 1){
                answer.push(j,i)
                console.log(j,i)
                loop = true
                break;
            }
        }
        if(loop) break;
    }
    for(let i=grape[0].length-1; i>=0; i--){
        let loop = false
        console.log("Here I am")
        for(let j=grape.length-1; j>=0; j--){
            if(grape[j][i] === 1){
                answer.push(j+1,i+1)
                // console.log(j+1,i+1)
                loop = true
                break;
            }
        }
        if(loop) break;
    }
    console.log("Answer", answer)
    return answer;
}

solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])