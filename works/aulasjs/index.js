// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média


const aluno1 = "Bruno"
const notaAluno01 = 9

const aluno2 = 'Josh'
const notaAluno02 = 10

const aluno3 = `Noah e ${aluno1}`
const notaAluno03 = 5

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
    console.log(`A media foi de ${media}, Parabéns`)
} else { 
    console.log('A média é menor que 5')
}
