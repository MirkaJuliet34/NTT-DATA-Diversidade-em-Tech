class Pessoa {
    nome;
    idade;

    constructor() {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - this.idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);

    }
}

// ----------------------------- //

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const aline = new Pessoa('Aline Santos', 33);
const fulano = new Pessoa('Fulano de Tal', 25);

compararPessoa(aline, fulano);

/*

aline.descrever();
fulano.descrever();

const aline = {
    nome: 'Aline Santos',
    idade: 33,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

aline.descrever();

classe = definicao
instancia = ocorrencia



aline.altura = 1.70;
console.log(aline.nome);
console.log(aline.idade);
console.log(aline); */