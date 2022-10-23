const notas = [];

notas.push(5);
notas.push(8);
notas.push(7);
notas.push(3);
notas.push(9);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];  
    soma = soma + nota;  
}

const media = soma / notas.length;

console.log(soma);
console.log(media.toFixed(2));







/*
const alunos = ['aline', 'fulano', 'ciclano']

alunos.push('beltrano');
alunos[4] = 'bob'

console.log(alunos[1]);

console.log(alunos.pop()); // exclui o ultimo item da lista

console.log(alunos.shift()); // exclui o primeiro item da lista

*/