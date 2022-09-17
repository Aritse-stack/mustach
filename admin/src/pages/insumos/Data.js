
export const textInput = {
    topline: 'novo insumo',
    headline: 'Cadastre os insumos e facilite seu trabalho',
    description: 'os insumos facilitarão diversas tarefas no sistema alem de te mostrar um grafico com o uso diario.'
}

export const textUpdate = {
    topline: 'atualizar insumos',
    headline: 'Mantenha atualizado as informações dos insumos',
    description: 'sempre tenha em mente que diversos outros serviços utilizam os insumos como base, sendo então muito relevante manter tudo atualizado.'
}

export const formInputs = [
    {   name: 'insumo',
        type: 'input',
        placeholder: 'Nome do Insumo' },
    {
        name: 'descricao',
        type: 'input',
        placeholder: 'Descrição curta do produto' },
    {
        name: 'image',
        type: 'file',
        innerText: 'Selecione uma imagem' },
    {
        name: 'medida',
        type: 'select',
        options: ['UN','Gramas','Kilogramas','Caixa'],
        innerText: 'Selecione uma opção' },
    {
        name: 'classe',
        type: 'select',
        options: ['UTENCILHOS','ALIMENTO'],
        innerText: 'Selecione uma opção'}
];

const distribuidor = {
    prod: [
        { id: '', custo: '', valor: '' }
    ]
}