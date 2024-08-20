function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let n = arr.length;  
    
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        
      
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    
    
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);


}

console.log(diagonalDifference([
    [10, 23, 55],
    [3, 2, 4],
    [12, 14, 16]
]
));