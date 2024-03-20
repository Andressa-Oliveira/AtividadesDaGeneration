programa
{
	
	funcao inicio()
	{
		inteiro numeros[10], i,soma
		real media

		para (i=0;i<=9;i++){
		escreva("Digite dez números inteiros")
		leia(numeros[i])}

		//elementos pares:
		para (i=0;i<=9;i++) 
          se (i % 2!=0)
           escreva(numeros[i], " ")

//elementos nos índices ímpares:
         escreva("números nos índices ímpares:")
        para (i = 1; i < 10; i = i + 2)
         escreva(numeros[i])

 soma = numeros[0]+numeros[1]+numeros[2]+numeros[3]+numeros[4]+numeros[5]+numeros[6]+numeros[7]+numeros[8]+numeros[9]      
media = soma/10

         escreva("Soma: ", soma)
         escreva("Media: ", media)
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 574; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */