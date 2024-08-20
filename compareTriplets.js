function compareTriplets(a, b) {
    
    let alicePts = 0;
    let bobPts = 0;
    
    for (let i=0; i < 3; i++) {
        if(a[i] > b[i]) {
            alicePts++;
        }else if (a[i] < b[i]) {
            bobPts++;
        }
        
    }
    return [alicePts, bobPts];
    
}

 let a = [5, 12, 23];
 let b = [33, 5, 60];

console.log(compareTriplets(a, b));