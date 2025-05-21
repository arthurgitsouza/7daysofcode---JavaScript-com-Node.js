const readline = require('readline');

const numeroSecreto = 10;
const maxTentativas = 3;
let tentativas = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar() {
    if (tentativas > maxTentativas) {
        console.log(`Suas ${maxTentativas} tentativas acabaram! O número secreto era ${numeroSecreto}.`);
        rl.close();
        return;
    }

    rl.question(`Tentativa ${tentativas}/${maxTentativas}: Chute um número entre 0 e 10: `, (resposta) => {
        const chute = parseInt(resposta);

        if (chute === numeroSecreto) {
            let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
            console.log(`Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`);
            rl.close();
        } else {
            console.log('Você errou, tente novamente.');
            tentativas++;
            perguntar(); 
        }
    });
}

perguntar(); 