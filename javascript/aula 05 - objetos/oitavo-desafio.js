/*
Crie uma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
crie um método que dado a quantidade de km e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    cor;
    marca;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const veiculo = new Carro('Fiat', 'Preto', 1/12);
console.log(veiculo.calcularGastoViagem(70, 5));

const veiculo2 = new Carro('Corsa', 'Prata', 1/10);
console.log(veiculo2.calcularGastoViagem(70, 5));
