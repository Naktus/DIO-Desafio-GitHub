function filtra(arr) {
    return arr.filter(callback);
}

/* function callback(item) {
    return item %2 ===0;
} */ //Filtrar pares

function callback(item) {
    return item %2 !==0;
} //Filtar impares

const meuArray = [1,23,55,67,30,2,4];

console.log(filtra(meuArray));