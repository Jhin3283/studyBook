function solution(maps) {
    var answer = [];
    let map = []
    maps.map(e => {
      map.push(e.split(""))
    });
    let xAxis = [1,0,-1,0]
    let yAxis = [0,1,0,-1]
    function DFS (x,y,num){
      let sum = Number(num)
    for(let i=0; i<4; i++){
      let dx = x + xAxis[i]
      let dy = y + yAxis[i]
      if(dx >=0 && dy>=0 && dy < map[0].length && dx < map.length){
        if(map[dx][dy] !== "X"){
          let dum = map[dx][dy]
          map[dx][dy] = "X"
          sum += DFS(dx,dy,dum)
        }
      }
    }
    return sum
  }
    for(let i=0; i<map.length; i++){
      for(let j=0; j<map[0].length; j++){
        if(map[i][j] !== "X"){
          let dummy = map[i][j]
          map[i][j] = "X"
          answer.push(DFS(i,j,dummy))
        }
      }
    }
    if(answer.length === 0){
      return [-1]
    }
    return answer.sort((a,b) => a-b)
  }

  // DFS 활용 코드