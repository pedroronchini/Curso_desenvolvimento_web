var operacao = prompt("Digite a operação desejada: ");

function soma() {
    var n1 = prompt("Digite o primeiro número: ");
    var n2 = prompt("Digite o segundo numero número: ");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    var resultado = n1 + n2;

    return resultado;
}

function subtracao() {
    var n1 = prompt("Digite o primeiro número: ");
    var n2 = prompt("Digite o segundo numero número: ");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    var resultado = n1 - n2;

    return resultado;
}

function multiplicacao() {
    var n1 = prompt("Digite o primeiro número: ");
    var n2 = prompt("Digite o segundo numero número: ");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    var resultado = n1 * n2;

    return resultado;
} 

function divisao() {
    var n1 = prompt("Digite o primeiro número: ");
    var n2 = prompt("Digite o segundo numero número: ");

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    
    var resultado = n1 / n2;

    return resultado;
}

if(operacao === "+") {
    document.write(soma());
}
if (operacao === "-") {
    document.write(subtracao());
}
if (operacao === "*") {
    document.write(multiplicacao());
}
if (operacao === "/") {
    document.write(divisao());
}else {
    alert("Operação Inválida!");
}