<?php
// Expressões regulares
// Define um padrão a ser usao para procurar ou substituir palavras ou grupos de palavras.
// ^ inicio da expressão, $ final da expressão - /i - case sensitive
// [] conjunto de caracteres
// {} ocorrências - ?{0,1} *{0,} +{1,}
// /^[a-z0-9. \-\_]+@[a-z0-9-\_]+\.(com|br|com.br|net)$/
// /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/

$string = "3/09/2018";
$padrao = "/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/";

if(preg_match($padrao, $string)):
	echo "Válido";
	echo "<hr>";
	echo $string;
else:
	echo "Inválido";
	echo "<hr>";
endif;
