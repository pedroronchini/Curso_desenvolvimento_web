<?php
// Arrays númericos
$carros = array(1=>"BMW",2=>"Veloster",3=>"Hilux");
$carros[] = "Amarok";
$carros[10] = "Camaro";
echo $carros[10];
//print_r($carros);
echo "<br>";

$motos = array();
$motos[] = "Yamaha";
$motos[] = "Honda";
$motos[5] = "Suzuki";
echo $motos[5];
//print_r($motos);,
echo "<br>";

$cliente = ["Rodrigo", "Felipe", "Bia"];
print_r($cliente);
echo "<hr>";

//Count - Conta quantos elementos há no array
$TotalClientes = count($cliente);
echo $TotalClientes;
echo "<hr>";

//Foreach - loop para percorrer arrays
foreach($cliente as $valor) {
    echo $valor."<br>";
}
echo "<hr>";

//Arrays associativos
$pessoa = array("nome"=> "Rodrigo", "idade" => 23, "altura" => 1.75);
$pessoa["cidade"] = "Itabuna";

foreach($pessoa as $indice => $valor){
    echo $indice.":".$valor."<br>";
}
echo "<hr>";

//Arrays multidimensionais

$times = array(
		"cariocas"=> array("rebaixado"=> "vasco","vice"=> "flamengo", "terceiro"=>"botafogo"),
		"paulistas"=> array("campeao"=> "santos","vice"=> "sao paulo","terceiro"=> "palmeiras", "ultimo"=>"corinthians"),
		"baianos"=> array("campeao"=>"bahia","vice"=> "vitoria","ultimo"=> "itabuna"),
		"gauchos"=> array("campeao"=>"internacional","vice"=>"gremio","ultimo"=>"novo hamburgo"),
		"mineiros"=> array("campeao"=>"Caldense","vice"=> "Atlético","terceiro"=>"Boa Esporte", "rebaixado"=>"Cruzeiro")
		);
/*echo $times["paulistas"][1];
echo "<br>";*/

foreach($times["cariocas"] as $indice => $valor){
	echo $indice.":".$valor."<br>";
}
echo "<br>";
echo "<hr>";

foreach($times["paulistas"] as $indice => $valor){
	echo $indice.":".$valor."<br>";
}
echo "<br>";
echo "<hr>";

foreach($times["baianos"] as $indice => $valor){
	echo $indice.":".$valor."<br>";
}
echo "<br>";
echo "<hr>";

foreach($times["gauchos"] as $indice => $valor){
	echo $indice.":".$valor."<br>";
}
echo "<br>";
echo "<hr>";

foreach($times["mineiros"] as $indice => $valor){
	echo $indice.":".$valor."<br>";
}
echo "<br>";
echo "<hr>";
