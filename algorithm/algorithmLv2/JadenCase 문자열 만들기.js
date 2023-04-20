function solution(s) {
    var answer = s.toLowerCase();
    let words = answer.split(" ");
    for(let i=0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words
        [i].slice(1)
    }
    return words.join(" ");
}

// charAt(idx)를 이용하여 한 스트링값만 뽑을수 있는것을 이용