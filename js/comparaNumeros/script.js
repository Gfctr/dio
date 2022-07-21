// function comaparaNumeros(num1, num2) {
// const iguais = num1 === num2;
// const soma = num1 + num2;
// const mult = num1 * num2;
// const subt = num1 - num2;

// if ternário
// return iguais ? "São iguais." : "Não são iguais";

// if(iguais){
//     return "Os números `{!num1}` são iguais";
// }

// return "Não são iguais!";
// }

function comaparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina os valores!';
    const primeiraFrase = criapPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`;
}

function criapPrimeiraFrase(num1, num2) {
    let iguais = '';

    if (num1 !== num2) {
        iguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let result10 = 'menor';
    let result20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        result10 = 'maior';
    } if (compara20) {
        result20 = 'maior';
    }

    return `\nSua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`;
}

console.log(comaparaNumeros(35, 35));