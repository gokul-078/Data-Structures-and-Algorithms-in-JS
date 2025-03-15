
// Reverse a array in the same variable...

function reverseArray(arr){
    let arrlen = arr.length - 1;
    let midElement = Math.floor(arr.length/2);
    for(let i=0; i<midElement; i++){
        let temp = arr[i];
        arr[i] = arr[arrlen];
        arr[arrlen] = temp;
        arrlen--;
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10];
reverseArray(arr);
console.log(arr);
