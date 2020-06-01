/* Pilar da abstração

class  ContaBancaria {
	constructor() {
		this.agencia = 1075;
		this.numeroConta = 8351125;
		this.saldo = 50;
		this.limite = 450;
	}

	depositar(valorDeposito) {
		this.saldo += valorDeposito;
	}

	sacar(valorSaque) {
		this.saldo -= valorSaque;
	}

	consultarSaldo() {
		return this.saldo;
	}

}

let x = new ContaBancaria();
let y = new ContaBancaria();

console.log(x.consultarSaldo());
x.depositar(450);
console.log(x.consultarSaldo());
x.sacar(200);
console.log(x.consultarSaldo());

console.log(y.consultarSaldo());
*/

function naipeDeTruco(naipe){
    var valorNaipes = [1,2,3,4,5,6,7,11,12];
    for(var i = 0; i < valorNaipes.length; i++){
	    if(naipe=="espadas"){
	    	var resposta =valorNaipes[0]+" de espadas,"+valorNaipes[1]+" de espadas,"+valorNaipes[2]+" de espadas,"+valorNaipes[3]+" de espadas,"+valorNaipes[4]+" de espadas,"+valorNaipes[5]+" de espadas,"+valorNaipes[6]+" de espadas,"+valorNaipes[7]+" de espadas,"+valorNaipes[8]+" de espadas";
	    }
	    if(naipe=="ouro"){
	        var resposta =valorNaipes[0]+" de ouro,"+valorNaipes[1]+" de ouro,"+valorNaipes[2]+" de ouro,"+valorNaipes[3]+" de ouro,"+valorNaipes[4]+" de ouro,"+valorNaipes[5]+" de ouro,"+valorNaipes[6]+" de ouro,"+valorNaipes[7]+" de ouro,"+valorNaipes[8]+" de ouro";
	    	return resposta;
	    }
	    if(naipe=="copas"){
	        var resposta =valorNaipes[0]+" de copas,"+valorNaipes[1]+" de copas,"+valorNaipes[2]+" de copas,"+valorNaipes[3]+" de copas,"+valorNaipes[4]+" de copas,"+valorNaipes[5]+" de copas,"+valorNaipes[6]+" de copas,"+valorNaipes[7]+" de copas,"+valorNaipes[8]+" de copas";
	    	return resposta;
	     
	    }
	    if(naipe=="paus"){
	       	var resposta =valorNaipes[0]+" de paus,"+valorNaipes[1]+" de paus,"+valorNaipes[2]+" de paus,"+valorNaipes[3]+" de paus,"+valorNaipes[4]+" de paus,"+valorNaipes[5]+" de paus,"+valorNaipes[6]+" de paus,"+valorNaipes[7]+" de paus,"+valorNaipes[8]+" de paus";
	    	return resposta;
	    }
	}
}
console.log(naipeDeTruco("ouro"));

