const lista = [
    {
        nome: 'toddy',
        preco: 9,
    },
    {
        nome: 'sucos x6',
        preco: 12,
    },
    {
        nome: 'pipoca',
        preco: 13,
    },
];

const saldo = 100;

function calculaSaldo(saldo, lista){
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev})
        console.log({current})
        return prev - current.preco;
    }, saldo);
}

console.log(calculaSaldo(saldo, lista))