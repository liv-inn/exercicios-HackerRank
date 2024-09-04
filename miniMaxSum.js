

function miniMaxSum(arr) {
    
    
    arr.sort((a, b) => a - b);

   const minSum = arr.slice(0,4).reduce((a, b)=> a + b, 0);

   const maxSum = arr.slice(1).reduce((a, b)=> a+ b, 0);

console.log(minSum, maxSum);
    
    

}


miniMaxSum([3, 1, 5, 7, 9]);
miniMaxSum([5, 10, 15, 1, 8])





// function miniMaxSum(arr) {
    
    
//     arr.sort((a, b) => a - b);

// ordena os números do array em ordem crescente. sort() é usado para organizar números e (a, b) => a - b é uma função que ajuda a ordenar corretamente os números

//    const minSum = arr.slice(0,4).reduce((a, b)=> a + b, 0);

//'arr.slice(0,4)'pega os primeiros quatro números do array já ordenado 
//'reduce((a, b) => a + b, 0) soma esses quatro números. 0 no final é o valor inicial da soma. o resultado dessa soma é armazenada na variavel minSum

//    const maxSum = arr.slice(1).reduce((a, b)=> a+ b, 0);

//

// console.log("O maior número é: " + minSum  + ", e o menor é: " + maxSum);
    
    

// }