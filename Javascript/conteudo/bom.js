/**********************************************
BOM Window

var janela;

function abrirPopUp() {
    janela = window.open("", "nova_janela", "width=200", "height=100");
}

function fecharPopUp() {
    janela.close();
}
*/

/**********************************************
BOM Screen

var altura = window.screen.availHeight;
var largura = window.screen.availWidth;

//document.write("A altura do navegador é: " + altura + "<br />");
//document.write("A largura do navegador é: " + largura);

if(largura < 500) {
    document.write("Lógica para impressão do menu versão mobile");
}else{
    document.write("Lógica para impressão do menu versão web");
}
*/

/**********************************************
BOM Location
*/

/**********************************************
BOM Timing
*/

//setTimeout(function() {document.write("Teste")}, 2000);

var i = 5;

var x = setInterval(function() 
{
    document.write(i + "<br />");
    i--;

    if(i === 0) {
        clearInterval(x);
    }
    }, 1000);
