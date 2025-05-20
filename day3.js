const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const back = 'Back-End'
const front = 'Front-End'

rl.question('Qual o seu nome? ', (nome) =>{
    rl.question(`${nome}, qual área você quer seguir? (${back}|${front})? `, (op1) => {
        if (op1 == front){
            rl.question('Você quer aprender REACT ou VUE?', (op2) =>{
                rl.question(`Você quer seguir se especializando na área de ${front} ou seguir se desenvolvendo para se tornar Fullstack? `, (op3) => {
                })
                })
            } else if (op1 == back){
                rl.question('Você quer aprender C# ou JAVA? ', (op2) => {
                    rl.question(`Você quer seguir se especializando na área de ${back} ou seguir se desenvolvendo para se tornar Fullstack`, (op3) =>{
                    })
                })
        }
        }
    })
})