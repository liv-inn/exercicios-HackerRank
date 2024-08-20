function aVeryBigSum(ar) {
   
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

let numbers = [30, -1, 0, 55, 19, 800];
console.log(aVeryBigSum(numbers));