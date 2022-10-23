/*faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota3) / 3;

Classificação:
- media menor que 5 = reprovado
- media entre 5 e 7 = recuperação
- media acima de 7 = aprovado
*/

const nota1 = 6;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}