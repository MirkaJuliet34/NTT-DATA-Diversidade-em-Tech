/* Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:
- preço do etanol
- preco da gasolina
- tipo de combustivel que está no seu carro
- gasto medio de combustivel do carro por Km
- distancia em km da sua viagem

imprima no console o valor que será gasto para realizar a sua viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const distanciaEmKm = 100;
const kmPorLitros = 10;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

