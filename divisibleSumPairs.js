function divisibleSumPairs(n, k, ar) {

    let paresValidos = 0;

    for (let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if((ar[i] + ar[j]) % k === 0){
                paresValidos++;
            }
        }
    }
    
    return paresValidos;
}


function main(){

    // const n = 4;
    // const k = 8;
    // const ar = [2, 5, 6, 8];


    const n = 6;
    const k = 4;
    const ar = [2, 8, 24, 5, 9, 6]

    const resultado = divisibleSumPairs(n, k, ar);
    console.log(resultado); 

}

main();






// encontrar o numero de pares em um array de inteiros cujo a soma é divisivel por um numero k.
// n = comprimento do array
// k = divisor positivo
// ar = array de inteiros


// o par é valido se a soma dos dois números for divisivel por k
// tudo bem usar const nesse caso pq o valor não muda enquanto o programa é executado