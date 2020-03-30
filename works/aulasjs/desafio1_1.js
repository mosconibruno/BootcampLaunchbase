// Exercicio 1
// Cálculo de IMC
// Crie um programa para calcular o IMC e nível 
// de obesage de uma pessoa.
// Comece criando constantes para armazenar o name,
// weigth, heigth e genre de uma pessoa, por exemplo:
// const name = "Carlos";
// const weigth = 84;
// const heigth = 1.88;
/* A partir desses dados armazene em uma constante 
chamada imc o cálculo do índice de massa 
corporal definido pela fórmula abaixo:

weigth / (heigth * heigth);
Baseado no valor obtido através desse cálculo 
exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está 
acima do weigth;
SE o IMC menor que 29.9: Carlos você não está 
acima do weigth;
*/

function exec1(){

const name = "Bruno";
const weigth = 76;
const heigth = 1.78;

const imc = weigth / (heigth * heigth);

if (imc >= 30){
    console.log(`${name} you are overweigth`);
} else {
    console.log(`${name} you aren't overweigth`); 
}
};

/* Exercicio 2
Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de
uma pessoa. Obs.: Esse cálculo é fictício, 
dentro da aposentadoria existem muitos outros 
fatores para serem levados em conta :)

Comece criando constantes para armazenar name, 
genre, age e contribution(em anos), por exemplo:

const name = "Silvana";
const genre = "F";
const age = 48;
const contribution = 23;
Baseado nos valores acima utilize as fórmulas 
a seguir para calcular se a pessoa está apta 
ou não para se aposentar e no fim imprima 
uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 
35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a sum da age com 
o tempo de contribuição do homem precisa ser de 
no mínimo 95 anos, enquanto a mulher precisa ter 
no mínimo 85 anos na sum;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode 
se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, 
você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, 
veja o exemplo abaixo:

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}

*/

function exec2(){

const name = "Marcelo";
const genre = "M";
const age = 60;
const contribution = 42;

const sum = age + contribution;

if (genre === "M") {
    if (sum >= 95){
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't retire yet!`)
    }
} else {
    if (sum >= 85){
        console.log(`${name}, you can retire!`)
    } else {
        console.log(`${name}, you can't retire yet!`)
    }

}

};

exec2();