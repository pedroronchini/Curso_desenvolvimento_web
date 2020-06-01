<?php

for($contador = 0; $contador <= 10; $contador++):
    echo "5 x $contador = ".($contador * 5)."<br>";
endfor;
echo "<hr>";

for($contador = 0; $contador <= 10; $contador++):
    echo "600000000000549878915354343543 x $contador = ".($contador * 600000000000549878915354343543)."<br>";
endfor;
echo "<hr>";

$cores = array("Verde", "Vermelho", "Azul", "Preto");

foreach ($cores as $indice => $valor){
    echo $indice."-".$valor."<br>";
}
