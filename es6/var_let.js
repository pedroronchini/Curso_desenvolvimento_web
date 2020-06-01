/* var e let
let serie = "Friends";

{
    let serie = "The Walking Dead";
    console.log("dentro do bloco: " + serie);
}
console.log("fora do bloco: " + serie);
*/
/*Const*/
const SERIE = "Friends";

function x() {
    const SERIE = "The Walking Dead";
    console.log("Dentro da função: " + SERIE);
}

x();
console.log("Fora da função: " + SERIE);
