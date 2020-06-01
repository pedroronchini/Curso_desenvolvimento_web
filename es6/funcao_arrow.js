/*let quadrado = function(x = 5) {
    return x * x;
}

let quadrado = (x) => {
    return x * x;
}

let quadrado = x => x * x;

document.write(quadrado(3));


let parOuImpar = function(numero) {
    if(numero % 2 === 0){
        return "par";
    }else{
        return "ímpar";
    }
}

let parOuImpar = numero => {
    if(numero % 2 === 0){
        return "par";
    }else{
        return "ímpar";
    }
}
*/
let parOuImpar = numero => numero % 2 === 0 ? "par" : "ímpar";// return implícito

document.write(parOuImpar(155));