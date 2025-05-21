const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function menu_de_opcoes() {
    console.log('\nCALCULADORA')
    console.log('\nESCOLHA A OPERAÇÃO QUE DESEJA REALIZAR ABAIXO:')
    console.log('1. +\n2. -\n3. *\n4. /\n5. Sair')

    rl.question('Opção escolhida: ', (opcaoStr) => {
        const opcao = parseInt(opcaoStr)

        if (opcao === 5) {
            console.log('Encerrando calculadora...')
            rl.close()
            return
        }

        rl.question('Digite o 1° número: ', (n1Str) => {
            const n1 = parseInt(n1Str)

            rl.question('Digite o 2° número: ', (n2Str) => {
                const n2 = parseInt(n2Str)
                let resultado

                if (opcao === 1) {
                    resultado = somar(n1, n2)
                    console.log(`Resultado: ${resultado}`)
                } else if (opcao === 2) {
                    resultado = n1 > n2 ? subtrair(n1, n2) : subtrair(n2, n1)
                    console.log(`Resultado: ${resultado}`)
                } else if (opcao === 3) {
                    resultado = multiplicar(n1, n2)
                    console.log(`Resultado: ${resultado}`)
                } else if (opcao === 4) {
                    if (n2 === 0 || n1 === 0) {
                        console.log('Erro: divisão por zero!')
                    } else {
                        resultado = n1 > n2 ? dividir(n1, n2) : dividir(n2, n1)
                        console.log(`Resultado: ${resultado}`)
                    }
                } else {
                    console.log('Opção incorreta!')
                }

                menu_de_opcoes()
            })
        })
    })
}

function main() {
    menu_de_opcoes()
}

main()
