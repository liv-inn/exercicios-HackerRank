function plusMinus(arr) {
    
    let positive_number = 0;
    let negative_number = 0;
    let zero_number = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive_number++;
        }
        else if(arr[i] < 0){
            negative_number++;
        }
        else{
            zero_number++;
        }
    }

    let positive_ratio = positive_number / arr.length;
    let negative_ratio = negative_number / arr.length;
    let zero_ratio = zero_number / arr.length;


    console.log(positive_ratio.toFixed(6));
    console.log(negative_ratio.toFixed(6));
    console.log(zero_ratio.toFixed(6));

    return[positive_ratio, negative_ratio, zero_ratio];
}

plusMinus([80, -20, 0, -1, 2, -5, -3]);
