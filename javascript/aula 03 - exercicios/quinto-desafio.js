/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha a condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
- [1] à vista debito = recebe 10% de desconto;
- [2] à vista no dinheiro ou pix = recebe 15% de desconto;
- [3] em duas vezes = preço normal de etiqueta sem juros
- [4] acima de duas vezes =  preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoProduto - (precoProduto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoProduto);
} else {
    console.log(precoProduto + (precoProduto *  0.1));
}