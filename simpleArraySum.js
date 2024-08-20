function simpleArraySum(ar) {
    let sum = 0;
      for (let i = 0; i < ar.length; i++) {
          sum += ar[i];
      }
      return sum;
  }
  
  console.log(simpleArraySum([50, 33, 99, -1, 0, -20, 54]));