const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const categorias = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: []
};

function perguntarAdicionar() {
    rl.question('Deseja adicionar uma comida na sua lista de compras? (sim/não) ', (resposta) => {
        const respostaNormalizada = resposta.trim().toLowerCase();
        if (respostaNormalizada === 'sim') {
            perguntarComida();
        } else if (respostaNormalizada === 'não' || respostaNormalizada === 'nao') {
            mostrarLista();
            rl.close();
        } else {
            console.log('Resposta inválida. Digite "sim" ou "não".');
            perguntarAdicionar(); 
        }
    });
}

function perguntarComida() {
    rl.question('Qual comida você deseja adicionar? ', (comida) => {
        rl.question('Em qual categoria ela se encaixa (Frutas, Laticínios, Congelados, Doces)? ', (categoria) => {
            const categoriaFormatada = categoria.trim().charAt(0).toUpperCase() + categoria.trim().slice(1).toLowerCase();

            if (categorias.hasOwnProperty(categoriaFormatada)) {
                categorias[categoriaFormatada].push(comida.trim());
                console.log(`${comida.trim()} adicionada em ${categoriaFormatada}!\n`);
            } else {
                console.log(`Categoria "${categoria}" não reconhecida. Tente novamente com uma das opções: Frutas, Laticínios, Congelados, Doces.\n`);
            }

            perguntarAdicionar(); 
        });
    });
}

function mostrarLista() {
    console.log('\nLista de compras:');
    for (let categoria in categorias) {
        const itens = categorias[categoria];
        const frase = itens.length > 1
            ? itens.slice(0, -1).join(', ') + ' e ' + itens.slice(-1)
            : itens.join('');
        console.log(`  ${categoria}: ${frase}`);
    }
}

perguntarAdicionar();
