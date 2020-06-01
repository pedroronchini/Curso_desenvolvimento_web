<?php
/*
 * Condicionais
 * switch
 * case
*/

$cor = "amarelo";

switch ($cor) {
	case "vermelho":
	echo "Sua cor preferida é o vermelho.";
	break;

	case "verde":
	echo "Sua cor preferida é o verde.";
	break;

	case "azul":
	echo "Sua cor preferida é o azul.";	
	break;

	default:
	echo "Sua cor preferida não é vermelho, verde ou azul.";
}
