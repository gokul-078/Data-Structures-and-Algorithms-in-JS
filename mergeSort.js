
// Merge Sort..
/*
Merge sort idea:
Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted).
Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.
*/


function merge(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return mergeSort(merge(leftArr), merge(rightArr));
}

function mergeSort(leftArr, rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

let arr = [5, -3, 7, 3, -1, 9, 2];
console.log(merge(arr));

//  Here, the Big(o) - o(nlogn)...




// Inplace merge sort...

class Solution {
  mergeSort(arr, l, r) {
    if (l >= r) return;

    let mid = Math.floor((l + r) / 2);

    this.mergeSort(arr, l, mid);
    this.mergeSort(arr, mid + 1, r);

    this.merge(arr, l, mid, r);
  }

  merge(arr, l, mid, r) {
    let leftArr = arr.slice(l, mid + 1);
    let rightArr = arr.slice(mid + 1, r + 1);

    let i = 0,
      j = 0,
      k = l;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }
    }

    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
    }
  }
}

let finalSolution = new Solution();
let arr2 = [5,3,8,6,1,2];
finalSolution.mergeSort(arr2, 0, arr.length - 1)
console.log(arr2);


// Eg-3 

function main() {

    function mergeSort1(arr) {
        if (arr.length < 2) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2); 
        let leftArr = mergeSort1(arr.slice(0, mid));
        let rightArr = mergeSort1(arr.slice(mid));

        return merge1(leftArr, rightArr);
    }

    let arr = [3,4,2,8,1];
    let resultArr = mergeSort1(arr);
    return resultArr;
}

function merge1(leftArr, rightArr) {
    let sortedArr = [];
    let i = 0, j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            sortedArr.push(leftArr[i]);
            i++;
        } else {
            sortedArr.push(rightArr[j]);
            j++;
        }
    }

    return [...sortedArr, ...leftArr.slice(i), ...rightArr.slice(j)]; 
}

console.log(main());
