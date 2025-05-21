const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Categorias e seus itens
const categorias = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: []
};

function listaTemItens() {
    return Object.values(categorias).some(lista => lista.length > 0);
}

function perguntarAcao() {
    let pergunta = 'O que deseja fazer?\n1 - Adicionar um item\n';

    if (listaTemItens()) {
        pergunta += '2 - Remover um item\n';
    }

    pergunta += '3 - Sair\nEscolha uma opção: ';

    rl.question(pergunta, (resposta) => {
        switch (resposta.trim()) {
            case '1':
                perguntarComida();
                break;
            case '2':
                if (listaTemItens()) {
                    removerItem();
                } else {
                    console.log('A lista ainda está vazia. Não há itens para remover.\n');
                    perguntarAcao();
                }
                break;
            case '3':
                mostrarLista();
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.\n');
                perguntarAcao();
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
                console.log(`Categoria "${categoria}" não reconhecida. Tente novamente.\n`);
            }

            perguntarAcao();
        });
    });
}

function removerItem() {
    console.log('\nItens atuais na lista:');
    for (const categoria in categorias) {
        if (categorias[categoria].length > 0) {
            console.log(`  ${categoria}: ${categorias[categoria].join(', ')}`);
        }
    }

    rl.question('\nDigite o nome do item que deseja remover: ', (item) => {
        let encontrado = false;

        for (const categoria in categorias) {
            const index = categorias[categoria].indexOf(item.trim());

            if (index !== -1) {
                categorias[categoria].splice(index, 1);
                console.log(`"${item.trim()}" removido da categoria ${categoria}!\n`);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log('Não foi possível encontrar o item dentro da lista!\n');
        }

        perguntarAcao();
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

console.log('Bem-vindo à sua lista de compras interativa!');
perguntarAcao();
