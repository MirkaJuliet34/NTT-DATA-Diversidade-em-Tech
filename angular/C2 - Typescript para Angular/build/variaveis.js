"use strict";
let ligado = false;
let nome = "aline";
let idade = 30;
let altura = 1.9;

// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;

//tipos abrangentes: any, void
let retorno; // void
let retornoView = false; //any

//objeto sem previsibilidade
let produto = {
    name: "aline",
    cidade: "sp",
    idade: 33,
};

//objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};


let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};


//arrays
let dados: string[] = ["aline", "ana", "adriana"];
let dados2: Array<string> = ["aline", "ana", "adriana"];

let infos = [322, "aline"];


// tupla

let boleto = ["agua conta", 199.9, 32342342];


// arrays metodos
dados.pop();


//datas 
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
