/* ===================================================

OPERADORES DE COMPARACAO

>   Maior
<   Menor
>=  Maior igual a
<=  Menor igual a
==  Igual a
=== Igual e do mesmo tipo
!=  Diferente de
!== Diferente, inclusive do tipo

===================================================*/

// DESAFIO 1
const idade = 17;
// Verificar se a pessoa é maior de 18 anos
// se sim, deixar entrar, se não bloquear entrada
// se a pessoa tiver 17 anos
// avisar pra voltar quando fizer 18 anos
if (idade >= 18){
    console.log('Deixar entrar')
} else {
    console.log('Bloquear entrada')
}
if (idade === 17){
    console.log('Volte quando tiver 18')
}

/* =================================================
    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira

    ||  "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.

    !   "NÃO" Nega uma condição

==================================================== */

// DESAFIO 01

const idade = 17;

if (!(idade >= 18) || idade === 17){
    console.log('Bloquear entrada')
} else {
    console.log('Deixar entrar')
}

/* =================================================
    OPERADORES ARITMETICOS

   *    Multiplicacao
   /    Divisao
   %    Resto da divisao
   +    Adicao
   -    Subtracao    

==================================================== */

