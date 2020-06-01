<?php
// Funções para string
/* strtoupper
   strtolower
   subsstr
   str_pad
   str_repeat
   strlen
   str_replace
   strpos
*/

$nome = "RODRIGO OLIVEIRA";
//$novoNome = strtoupper($nome);
$novoNome = strtolower($nome);
echo $novoNome;

echo "<hr>";

$mensagem = "Olá mundo";
echo substr($mensagem, 4, 6);

echo "<hr>";

$objeto = "mouse";
$novoObjeto = str_pad($objeto, 10, "*", STR_PAD_BOTH);
echo $novoObjeto;

echo "<hr>";

$string = str_repeat("Sucesso!", 5);
echo $string;

echo "<hr>";

$mensagem1 = "Olá mundo";
echo strlen($mensagem1);

echo "<hr>";

$texto = "A seleção Argentina será campeã da copa do mundo de 2018!";
$novoTexto = str_replace("Argentina", "Brasileira", $texto);
echo $novoTexto;

echo "<hr>";

echo strpos($texto, "copa");
