function solution(wallpaper) {
  var answer = [];
  let xAxis = [];
  let yAxis = [];
  for(let i=0; i<wallpaper.length; i++){
    for(let j=0; j<wallpaper[0].length; j++){
      if(wallpaper[i][j] === "#"){
        xAxis.push(i)
        yAxis.push(j)
      }
    }
  }
  xAxis.sort((a,b)=> a-b)
  yAxis.sort((a,b)=> a-b)
  answer.push(xAxis[0],yAxis[0],xAxis[xAxis.length-1]+1,yAxis[yAxis.length-1]+1)
  console.log(answer)
  return answer;
}

solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])