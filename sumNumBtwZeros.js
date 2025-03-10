// To sum all the numbers in between 0's in an array and return a new array...

function sumArray(arr){
    let sumArr = [];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            if(sum > 0){
                sumArr.push(sum);
                sum = 0;
            }
        }
        sum += arr[i];
    }
    return sumArr;
}

let arr = [0,1,0,3,0,2,2,0];
console.log(sumArray(arr));
