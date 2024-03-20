const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, novoSalario;


nota1 = leia.questionFloat("\nNota 1: ");

nota2 = leia.questionFloat("\nNota 2: ");

nota3 = leia.questionFloat("\nNota 3: ");

nota4 = leia.questionFloat("\nNota 4: ");



mediaFinal = (nota1+nota2+nota3+nota4)/4

console.log("\nMédia final: " + mediaFinal);
