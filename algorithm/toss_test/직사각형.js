function solution(v) {
  let x = [];
  let y = [];
  for (let i = 0; i < v.length; i++) {
    x.push(v[i][0]);
    y.push(v[i][1]);
  }
  function removeDuplicates(array) {
    const uniqueArray = [];

    array.forEach((value) => {
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      } else {
        const index = uniqueArray.indexOf(value);
        uniqueArray.splice(index, 1);
      }
    });

    return uniqueArray[0];
  }
  return [removeDuplicates(x), removeDuplicates(y)];
}
