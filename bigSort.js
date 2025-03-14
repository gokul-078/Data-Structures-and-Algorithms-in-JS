
// BigSort...

let arr = [876, 7, 45, 7, 73829, 23, 97422];

let result = arr.sort((a, b) => {
    console.log(a);
    console.log(b);
    if(a.length !== b.length){
        return a.length - b.length
    }
    return a > b ? 1 : -1;
})

console.log(result);

