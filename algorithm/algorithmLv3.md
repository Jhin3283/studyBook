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
