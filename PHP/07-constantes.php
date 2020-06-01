<?php
//Constantes
define("NOME", "José Carlos");
define("IDADE", 24);
define("ALTURA", 1.89);
define("CASADO", true);

define("TIMES", ['vasco', 'flamento', 'santos']);

echo 'Meu nome é '.NOME.' e minha idade é '.IDADE.' e minha altura é '.ALTURA.'.';
echo "<hr>";
var_dump(TIMES);
function exibeNome(){
	echo NOME;
}

exibeNome();