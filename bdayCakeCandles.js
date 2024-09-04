function birthdayCakeCandles(candles) {
    
    const maxHeight = Math.max(...candles);
    // acha o maior vela 
    
    const count = candles.filter(candle => candle === maxHeight).length;
    //  conta quantas velas têm essa altura
    return count;
}

console.log(birthdayCakeCandles([3, 1, 2, 3, 3])); 
console.log(birthdayCakeCandles([5, 10, 15, 1, 8])); 





// Math.max() -> retorna o maior número.
// candles.filter(candle => candle === maxHeight) -> cria um novo array com todas as velas que tem altura igual a 'maxHeight'
// .lenght -> retorna o  número de elementos nesse novo array.
