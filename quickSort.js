
// Quick Sort...
/*
*Identify the pivot element in the array.
    • Pick first element as pivot.
    • Pick last element as pivot (Our approach).
    • Pick a random element as pivot.
    • Pick median as pivot.
>> Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.
>> Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.
>> Repeatedly concatenate the left array, pivot and right array till one sorted array remains.
*/

// Quick sort is not returning on the same array...

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    // Choosing pivot last element as a pivot...
    let pivot = arr[arr.length - 1];
    let leftSide = [];
    let rightSide = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            leftSide.push(arr[i]);
        }
        else{
            rightSide.push(arr[i]);
        }
    }
    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}


let arr = [5, -3, 3, 7, 3, -1, 9, 2];
console.log(quickSort(arr));

// The worst case complexity in this sorting method is o(n^2)... because we sort a sorted array...
// The avg case complexity is 0(nlogn)... because it reduces the array to half in number and sorts...


// Another eg:
/*
function quickSort(arr) {
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[0];
    let leftSide = arr.slice(1).filter(val => val < pivot);
    let rightSide = arr.slice(1).filter(val => val > pivot);

    let sortedLeft = quickSort(leftSide);
    let sortedRight = quickSort(rightSide);
    
    let sortedArr = [...sortedLeft, pivot, ...sortedRight];
    
    console.log(sortedArr.join(" "));

    return sortedArr;
} 

let arr = [7,3,8,3,0,2,4];
let finalRes = quickSort(arr);
console.log(finalRes);
*/
