// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
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
    },
    {
        nome: "Novo Aluno",
        nota: 7
    }
]

const alunosDaTurmaB = [
    {
        nome: "Pedro",
        nota: 7
    },
    {
        nome: "João",
        nota: 8
    },
    {
        nome: "Tiago",
        nota: 7.5
    }
]



function calculaMediaFixa(alunos) {
    return (alunos[0].nota + alunos[1].nota + 
        alunos[2].nota) / 3
}

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length;
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma

    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}, Parabéns`)
    } else { 
        console.log(`A média da turma ${turma} é menor que 5`)
    }

}

enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')

// console.log()



