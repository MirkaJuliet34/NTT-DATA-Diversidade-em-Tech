function escrevaMeuNome(name) {
    return 'Meu nome é: ' + name;
}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Aline') + ' é maior de idade.');
    } else {
        console.log("Você é menor de idade")
    }    
}
verificarIdade(25);