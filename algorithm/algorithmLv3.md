입국심사

```js
function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = n * times[times.length - 1];
  let result = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((el) => {
      count += Math.floor(mid / el);
      if (count >= n) {
        result = Math.min(mid, result);
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
```

디스크 컨트롤러

```
function solution(jobs) {
    jobs.sort(function(a,b){
        return a - b
    })
    let count = jobs[0][1]
    let result = count;
    for (let i=1; i<jobs.length; i++){
        count += jobs[i][1]
        result += count - jobs[i][0]
    }
     return Math.floor(result/jobs.length)
}
```
