<?php  
/*
 *Condicionais
 *if
 *else
 *elseif
*/

$numero = 50;

if ($numero == 10){
	echo "É igual a 10";
}
elseif ($numero <= 9) {
	echo "É menor ou igual a 9";
}
else{
	echo "É diferente de 10";
}

echo "<hr>";

$media = 6;

echo($media >= 7) ? "Aprovado!" : "Reprovado!";

