const classA = [
    {
        name: "Bruno",
        grade: 9.8
    },
    {
        name: "Josh",
        grade: 10
    },
    {
        name: "Noah",
        grade: 5
    },
    {
        name: "Novo Aluno",
        grade: 7
    }
]

const classB = [
    {
        name: "Pedro",
        grade: 4
    },
    {
        name: "João",
        grade: 8
    },
    {
        name: "Tiago",
        grade: 7.5
    }
]

function calculateAverageFixa(students) {
    return (students[0].grade + students[1].grade +
        students[2].grade) / 3
}

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    
    return average
}

function sendMessage(average, turma) {
    
    if (average > 5) {
        console.log(`The class ${turma} average is ${average}, Congrats!`)
    } else {
        console.log(`The class ${turma} average is less than 5`)
    }

}

function markAsFlunked(student) {
    student.flunked = false
   
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}
 
const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'A')
sendMessage(average2, 'B')

studentsFlunked(classA)
studentsFlunked(classB)