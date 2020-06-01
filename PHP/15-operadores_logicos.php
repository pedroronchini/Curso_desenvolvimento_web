<?php
// Operadores lógicos
// Nos permitem fazer comparações entre expressões
// e (&& - and);
// ou (|| - or);
// ou exclusivo (xor);
// negação (!);

$idade = 26;
$nome = "Oliveira";

if(($idade == 26) && ($nome == "Rodrigo")){
    echo "É verdadeiro";
}
else{
    echo "É falso";
}
echo "<hr>";

if(($idade == 23) || ($nome == "Carlos")){
    echo "É verdadeiro";
}
else{
    echo "É falso";
}
echo "<hr>";

if(($idade == 23) xor ($nome == "Rodrigo")){
    echo "É verdadeiro";
}
else{
    echo "É falso";
}
echo "<hr>";

if(!($idade == 25) && !($nome == "Rodrigo")){
    echo "É verdadeiro";
}
else{
    echo "É falso";
}
