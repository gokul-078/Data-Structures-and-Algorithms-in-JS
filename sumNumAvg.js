
function sumAvgArray(arr){
    let res1;
    let res2;
    let arr1 = [];
    let arr2 = [];
    let sum1 = 0;
    let count1 = 0;
    let finalResult = [];
    for(let i=0; i<arr.length; i++){
        let sum2 = 0;
        let count2 =0;
        sum1 = sum1 + arr[i];
        count1++;
        arr1.push(arr[i]);
        res1 = sum1/count1;
        let j = i + 1;
        while(j<arr.length){
            sum2 = sum2 + arr[j];
            count2++;
            arr2.push(arr[j]);
            j++;
        }
        res2 = sum2/count2;
        if(res1 === res2){
           finalResult = (`${arr1}),(${arr2}`);
        }
        else{
            arr2 = [];
        }
    }
    return finalResult;
}

let arr = [4,2,2,4];
console.log(sumAvgArray(arr));
