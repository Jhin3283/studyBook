// function solution(r1, r2) {
//   let answer = 0;
//   for(let i=1; i<=r2; i++){
//     for(let j=0; j<=r2; j++){
//       if(r2 ** 2 >= i ** 2 + j ** 2 && i ** 2 + j ** 2 >= r1 ** 2){
//         answer+=4
//       }
//     }
//   }
//   return answer;
// }

// 시간복잡도 O(n)으로 변경 피타고라스의 정리이용

function solution(r1, r2) {
    let answer = 0;

    for (let i=1; i < r2; i++) {
         if (i < r1) {
            answer += getMaxY(i, r2, false) - getMaxY(i, r1, true);
        } else {
            answer += getMaxY(i, r2, false);
        }
    }
    answer *= 4;
    // Y축이 0인 경우 합산
    answer += (r2 - r1 + 1) * 4;
    return answer;
  }

  // X좌표에 들어갈수 있는 최대 Y 좌표 갯수
  function getMaxY(x, r, bool) {
    const max = Math.sqrt(r * r - x * x);
    const maxToInt = parseInt(max);
    if (bool && max - maxToInt == 0) {
      // r1에서
        return maxToInt - 1;
    } else {
        return maxToInt;
    }
  }

  console.log(solution(2, 3))