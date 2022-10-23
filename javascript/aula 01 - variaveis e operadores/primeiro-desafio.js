// faça um programa para calcular o valor gasto de uma viagem
// voce tera 3 variaveis, sendo elas: preço do combustivel, gasto medio de combustivel do carro por KM e distancia em km
// imprima no console o valor que será gasto para realizar esta viagem


const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));