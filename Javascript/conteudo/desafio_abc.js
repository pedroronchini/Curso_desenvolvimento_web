var a = 10;
var b = 20;
var c = null; // Variável auxiliar utilizada na lógica

document.write('A: ' + a + '<br />');
document.write('B: ' + b + '<br />');
document.write('C: ' + c + '<br />');

document.write('<hr />');

// Lógica de inversão dos valores das variáveis A e B
c = 20;
a = c;

c = 10;
b = c;

c = null;

// Imprensão do valores alterados
document.write('A: ' + a + '<br />');
document.write('B: ' + b + '<br />');
document.write('C: ' + c + '<br />');