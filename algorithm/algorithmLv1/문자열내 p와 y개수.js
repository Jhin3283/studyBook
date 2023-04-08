function solution(s) {
  let dum = s.toLowerCase();
  let arr = dum.split("");
  let pCount = 0;
  let yCount = 0;
  for (el of arr) {
    if (el === "p") {
      pCount++;
    } else if (el === "y") {
      yCount++;
    }
  }
  if (pCount === yCount) {
    return true;
  } else {
    return false;
  }
}
