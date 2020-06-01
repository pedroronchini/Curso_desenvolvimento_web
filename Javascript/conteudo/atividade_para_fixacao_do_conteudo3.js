var num1 = prompt('Digite um número');
var operacao = prompt('Escolha uma operação');
var num2 = prompt('Digite o segundo número');

function calculo(num1, num2, operacao) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = 0;

    if (operacao == 'soma') {
        resultado = num1 + num2;
    }
    if (operacao == 'subtracao') {
        resultado = num1 - num2;
    }
    if (operacao == 'multiplicacao') {
        resultado = num1 * num2;
    }
    if (operacao == 'divisao') {
        resultado = num1 / num2;
    }

    return resultado;

}

document.write('O resultado é: ' + calculo(num1, num2, operacao));