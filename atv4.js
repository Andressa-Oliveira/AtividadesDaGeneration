const leia = require('readline-sync');

let numero1, numero2, numero3, numero4, diferenca;

numero1 = leia.questionFloat("\nnumero1: ");
numero2 = leia.questionFloat("\nnumero2: ");
numero3 = leia.questionFloat("\nnumero3: ");
numero4 = leia.questionFloat("\nnumero4: ");

diferenca=(numero1 * numero2) - (numero3 * numero4)


console.log("\nDiferença:" + diferenca);