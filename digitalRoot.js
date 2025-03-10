// Sum the given digit untill it becomes the single digit is called as digital Root.

function digitalRoot(numb){
    let result = numb % 9 ? numb % 9 : numb ? 9 : 0;
    return result;
}

console.log(digitalRoot(4));