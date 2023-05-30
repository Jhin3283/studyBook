function solution(maps) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let S;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") S = [j, i];
    }
  }
  const dp = [...new Array(maps.length)].map((_) =>
    [...new Array(maps[0].length)].fill(0)
  );
  const stk = [[...S, false, 0]];
  dp[S[1]][S[0]]++;
  console.log(dp);
  console.log(stk);
  while (stk.length) {
    const [x, y, laver, cnt] = stk.shift();

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];

      if (
        0 <= nx &&
        nx < maps[0].length &&
        0 <= ny &&
        ny < maps.length &&
        maps[ny][nx] !== "X"
      ) {
        if (laver && maps[ny][nx] === "E") return cnt + 1;
        if (laver && dp[ny][nx] > 1) continue;
        if (!laver && dp[ny][nx] > 0) continue;

        dp[ny][nx]++;
        stk.push([nx, ny, maps[ny][nx] === "L" ? true : laver, cnt + 1]);
      }
    }
  }
  return -1;
}
