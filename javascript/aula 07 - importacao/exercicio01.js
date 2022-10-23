/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado.
*/

const entradas = [5, 50, 10, 98, 25];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };