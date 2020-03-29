/* Exercicio 1
Construção e impressão de objetos
Crie um programa que armazena dados da 
empresa Rocketseat dentro de um objeto 
chamado empresa. Os dados a serem armazenados são:
Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260
Obs.: Para armazenar os dados de endereço da 
empresa você pode criar objetos 
intercalados, por exemplo:

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
Imprima em tela utilizando console.log 
o nome da empresa e seu endereço 
no seguinte formato:

A empresa Rocketseat está localizada 
em Rua Guilherme Gembala, 260
Obs. Para imprimir em tela utilize o 
formato de template strings, por exemplo

console.log(`O nome do usuário é ${usuario.nome}`);

*/

function exec1(){

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}
    console.log(`A empresa ${empresa.nome} está 
    localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`)
}

/* Exercicio 2
Vetores e objetos
Crie um programa com um objeto para armazenar 
dados de um programador como nome, 
idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, 
por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo 
nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }

Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade 
da primeira tecnologia que o usuário 
utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a 
tecnologia C++ com especialidade em Desktop

*/

function exec2(){

const programador = {
    nome: "Bruno",
    idade: 23,
    tecnologias: [
        { nome: "Javascript", especialidade: "Web/Mobile"},
        { nome: "ADVPL", especialidade: "ERP"},
        { nome: "HTML", especialidade: "Web"}
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e
 usa a tecnologia ${programador.tecnologias[1].nome} com especialidade
 em ${programador.tecnologias[1].especialidade}.`)

}

exec2()