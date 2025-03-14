
// Climbing Staircase problem...

function stairCase(n){
    let noOfWays = [1, 2];
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n - 1];
}

console.log(stairCase(1));
console.log(stairCase(2));
console.log(stairCase(3));
console.log(stairCase(4));
console.log(stairCase(5));

// Here, the Big(o) - 0(n) linear...
