

    function gradingStudents(grades) {
                    
        for (let i = 0; i < grades.length; i++) {
            let nota = grades[i]; // Nota atual
                
                    
            if (nota < 38) {
                        console.log(nota); // não arredonda, só imprime
                    } 
                    
            else {
                    
                let proxMultde5 = nota + (5 - (nota % 5)); // calcula o resto da divisão da nota por 5
                
                    
                if (proxMultde5 - nota < 3) {
                    console.log(proxMultde5);  //mostra no console arredondado se for menor que 3 
                } 
                        
                else {
                //   imprime a nota original
                console.log(nota);
                }
            }
        }
     }
            


gradingStudents([38, 40, 80, 83, 97]);
gradingStudents([15, 88, 64, 75, 57]);


// Nota entre 0 e 100, qualquer nota abaixo de 40 é reprovada.

// Arredondamento: se a diferença entre a nota de um aluno e próximo multiplo de 5 for menor que 3, a nota deve ser arredondada para esse próximo múltiplo de 5.
// ex: se a nota for 84 ela deve ser arredondada para 85 pois a diferença é menor que 3.

// Se a diferença entre a nota e o próximo multiplo de 5 for 3 ou maior, não muda. 
// **Notas menores que 38 não são arredondadas. 

