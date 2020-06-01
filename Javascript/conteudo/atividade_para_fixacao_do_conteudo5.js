var objeto = Array("Cadeira", "Impressora", "Garfo");

function adicionarValor() {
    // Recupera o valor do input
    var adicionar = document.getElementById("valor").value;

    // Verificar se o campo não esta vazio
    if ( adicionar.length <= 0) {
        alert("Informe um valor válido!");
    }else {
        // Verificar se o objeto ja existe dentro do array
        if (objeto.indexOf(adicionar) >= 0) {
            alert("Objeto já adicionado!");
        }else {
            objeto.push(adicionar);
            console.log(objeto);
        }
    }
    // Limpar o campo do input
    document.getElementById("valor").value = " ";

}

function ordenarArray() {
    objeto.sort();
    console.log(objeto);
}
/* Estrutura HTML para a ativade 
    <input type="text" id="valor">
	<button onclick="adicionarValor()">Adicionar</button>
    <button onclick="ordenarArray()">Ordernar</button>
*/