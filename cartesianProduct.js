
// Cartesian product is nothing but AxB...
// let A = [], B = [] => AxB...

function cartesianArr(arr1, arr2){
    let resultArr = [];
    for(let i=0; i<arr1.length; i++){
        let j = 0;
        while(j<arr2.length){
            resultArr.push([arr1[i], arr2[j]]);
            j++;
        }
    }
    return resultArr;
}

let arr1 = [1,2];
let arr2 = [3,4,5];
console.log(cartesianArr(arr1, arr2));

// Here, the Big(o) - 0(mn) => here, 'm' is j loop and 'n' is for loop it depends on the length of the both array...
// If the both length are same then Big(o) - o(n^2)...