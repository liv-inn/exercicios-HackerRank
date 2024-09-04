function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let nMacas = 0;
    let nLaranjas =0;

    for (let i = 0; i < apples.length; i++){
        let posicaoApple = a + apples[i];
        if (posicaoApple >= s && posicaoApple <= t){
            nMacas++;
        }
    } // conta as maças


    for (let i = 0; i < oranges.length; i++) {
        let posicaoOrange = b + oranges[i];
        if (posicaoOrange >= s && posicaoOrange <= t) {
            nLaranjas++;
        }
    } // conta as laranjas


console.log(nMacas);
console.log(nLaranjas);

}


function main(){


    //definir as variaveis que servem como parametro
    let s = 8;
    let t = 15;
    let a = 4;
    let b = 14;
    let apples = [5, 2, -5];
    let oranges = [7, -5, -2];

    countApplesAndOranges(s, t, a, b, apples, oranges)


}


main()





// exercício: quantas maças e laranjas caem na casa de Sam
// a = onde fica a arvore de maça
// b= onde fica a arvore de laranjas
// s - t -> começo e fim da casa de Sam.

 