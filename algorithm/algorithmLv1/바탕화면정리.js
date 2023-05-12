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
  // 제일 왼쪽위와 제일 오른쪽밑을 구해야 하기 때문에 모든 #의 위치를 넣고 정렬하면 해결할수 있는문제
  // sort() VS sort((a,b) => a-b)
  // sort()를 할 경우, 유니코드 코드포인트를 기준으로 정렬하기 때문에 정렬이 제대로 안될수 있음.