로또의 최고순위와 최저순위
```js
function solution(lottos, win_nums) {
    var answer = [];
    let max = 0;
    let min = 0;
    let count =0;
    for(let i =0; i<lottos.length; i++){
        if(lottos[i] === 0){
            max++
        }
        for(let j=0; j<win_nums.length; j++){
        if(lottos[i] === win_nums[j]){
            count++
        } 
        }
    }
    if(count === 0){
        min=1
    } if(count ===0 && max ===0){
    max =1 }
    answer.push(7-max-count)
    answer.push(7-count-min)
    
    return answer;
}
```
소수 만들기
```js
function solution(nums) {
    var answer = 0;
    function isPrime(n) {
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        } return true;
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){
                    answer++
                }
            }
        }
    }
    return answer;
}
```