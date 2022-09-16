
export const textInput = {
    topline: 'novo insumo',
    headline: 'Cadastre os insumos e facilite seu trabalho',
    description: 'os insumos facilitarão diversas tarefas no sistema alem de te mostrar um grafico com o uso diario.'
}

export const formInputs = {
    name: {
        type: 'input',
        placeholder: 'Nome do Insumo'
    },
    description: {
        type: 'input',
        placeholder: 'Descrição curta do produto'
    },
    img: {
        type: 'file',
        innerText: 'Selecione uma imagem'
    },
    medição: {
        type: 'select',
        options: ['UN','Gramas','Kilogramas','Caixa'],
        innerText: 'Selecione uma opção'
    },
    classe: {
        type: 'select',
        options: ['UTENCILHOS','ALIMENTO'],
        innerText: 'Selecione uma opção'
    }
}

const distribuidor = {
    prod: [
        { id: '', custo: '', valor: '' }
    ]
}