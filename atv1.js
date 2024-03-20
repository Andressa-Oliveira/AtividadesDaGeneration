const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("\nDigite o salário: ");
abono = leia.questionFloat("\nDigite o abono: ");

novoSalario=salario+abono;

console.log("\nNovo salário: R$" + novoSalario);