const leia = require('readline-sync');

let SALARIOBRUTO, ADICIONALNOTURNO, HORASEXTRAS, DESCONTOS, SALARIOLIQUIDO;

SALARIOBRUTO = leia.questionFloat("\nSalário Bruto: ");
ADICIONALNOTURNO = leia.questionFloat("\nAdicional Noturno: ");
HORASEXTRAS = leia.questionFloat("\nHoras Extras: ");
DESCONTOS = leia.questionFloat("\nDescontos: ");

SALARIOLIQUIDO = SALARIOBRUTO + ADICIONALNOTURNO + (HORASEXTRAS * 5) - DESCONTOS

console.log("\nSalário Líquido: R$" + SALARIOLIQUIDO + ".00");