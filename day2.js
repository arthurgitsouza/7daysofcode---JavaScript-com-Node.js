const readline = require('readline') // Chamando uma biblioteca do Node.js, assim como o Import do Python.

// OBS: require() função que importa uma biblioteca no JS

const rl = readline.createInterface({  // rl: Nome que estou atribuindo a interface
    input: process.stdin, // Entrada de dados por meio do TECLADO, por que o uso de : ? Funciona da mesma forma que um dicionário, com keys e values.
    output: process.stdout // Saida de dados por meio do TERMINAL
})

rl.question('Qual o seu Nome? ', (nome) => {
    rl.question('Qual a sua idade?', (idade) => {
        rl.question('Qual a linguagem de programação você está estudando?', (linguagem) => {
            console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)
            rl.close() // Fecha a interface de leitura do terminal, ou seja, o programa acabou as perguntas para o usuário
        })
    })
})

// Função question(): Exibe uma pergunta ao usuário, a qual a resposta pode ser armazenada em uma variável através de (var)
// 

