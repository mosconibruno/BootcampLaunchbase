// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const alunos = [
    {
        nome: "Bruno",
        nota: 9.8
    },
    {
        nome: "Josh",
        nota: 10
    },
    {
        nome: "Noah",
        nota: 5
    }
]

const aluno01 = {
    nome: "Bruno",
    nota: 9.8
}


const aluno02 = {
    nome: "Josh",
    nota: 10
}


const aluno03 = {
    nome: "Noah",
    nota: 5
}


const media2 = (alunos[0].nota + alunos[1].nota + 
    alunos[2].nota) / 3


const media = (aluno01.nota + aluno02.nota + 
    aluno03.nota) / 3




// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
    console.log(`A media foi de ${media}, Parabéns`)
} else { 
    console.log('A média é menor que 5')
}
