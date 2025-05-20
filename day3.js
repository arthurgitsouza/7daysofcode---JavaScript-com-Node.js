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
            rl.question('Você quer aprender REACT ou VUE ?', (op2) =>{
                rl.question(`Você quer seguir se especializando na área de ${front} ou seguir se desenvolvendo para se tornar Fullstack? `, (op3) => {
                    perguntaTecnologias()
                })
            })
            } else if (op1 == back){
                rl.question('Você quer aprender C# ou JAVA? ', (op2) => {
                    rl.question(`Você quer seguir se especializando na área de ${back} ou seguir se desenvolvendo para se tornar Fullstack? `, (op3) =>{
                        perguntarTecnologias()
                    })
                })
        }
    })
})

function perguntarTecnologias(){
    rl.question('Tem mais alguma tecnologia que você gostaria de aprender? (Digite "ok" para sim ou "não" para encerrar): ', (resposta) => {
        if (resposta.toLowerCase() == 'ok'){
            rl.question('Qual tecnologia você gostaria de aprender? ', (tecnologia) => {
                console.log(`Legal! ${tecnologia} parece ser uma ótima tecnologia para aprender!`);
                perguntarTecnologias()
            });
        } else {
            console.log('Obrigado por compartilhar suas preferências! Boa jornada nos estudos!');
            rl.close()
        }
    })
}