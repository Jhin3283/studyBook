function solution(jobs) {
    jobs.sort(function(a,b){
        return a[0] - b[0]
    })
    let count = 0;
    let result = 0;
    let q = [];
    let i =0;
    while(q.length !== 0){
        if(jobs.length > i && count >= jobs[i][0]){
            q.push(jobs[i++])
            q.sort(function(a,b){
                return a[1] - b[1]
            })
            continue;
        }
        if(q.length !== 0){
            count += q[0][1]
            result += count - q[0][0]
            q.shift()
        } else{
            count = jobs[i][0]
        }
    }
     return Math.floor(result/jobs.length)
}