function solution(park, routes) {
  let map = park.map((el) => el.split(""))
  let start = [];
  let go = false;
  for(let i=0; i<map.length; i++){
    for(let j=0; j< map[0].length; j++){
      if(map[i][j] === "S"){
        start = [i,j]
      }
    }
  }
  for(let i=0; i<routes.length; i++){
    let x = start[0]
    let y = start[1]
    let isTrue = true;
    let el = routes[i].split(" ")
    for(let j=0; j<el[1]; j++){
      if(el[0] === "E") y++
      else if(el[0] === "W") y--
      else if(el[0] === "S") x++
      else if(el[0] === "N") x--
    if(x<0 || y<0 || x>=map.length || y>=map[0].length || map[x][y] === "X"){
      isTrue = false
      break;
    }
  }
    if(isTrue){
      start = [x,y]
    }
  }
  return start;
}
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])