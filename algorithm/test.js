function solution(maps) {
  var answer = 0;
  let map = [];
  let mid = false;
  let end = false;
  maps.map((el) => {
    map.push(el.split(""));
  });
  let xAxis = [-1, 1, 0, 0];
  let yAxis = [0, 0, 1, -1];
  let now = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === "S") {
        now = [i, j];
      }
    }
  }
  while (end === false) {
    console.log(end);
    let [x, y] = now;
    for (let i = 0; i < 4; i++) {
      let xn = x + xAxis[i];
      let yn = y + yAxis[i];
      if (xn > 0 && yn > 0 && xn < map.length && yn < map[0].length) {
        if (map[xn][yn] !== "X") {
          if (map[xn][yn] === "L") {
            mid = true;
            answer++;
          } else if (map[xn][yn] === "E" && mid === true) {
            end = true;
            answer++;
            break;
          }
          now = [xn, yn];
          answer++;
          map[xn][yn] = "X";
        }
      }
    }
    if (end === true) break;
  }
  console.log(answer);
  return answer;
}

solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]);
