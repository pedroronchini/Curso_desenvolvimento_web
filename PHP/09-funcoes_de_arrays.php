<?php  
/* Funções importantes consideradas pelo  canal Node Studio Treinamentos 
 * is_array($array) = Verifica se uma dada variável é um array
 * in_array($valor, $array) = Checa se um valor existe em um array 
 * array_keys($array) = retorna um novo array com as chaves do array passado como parâmetro
 * array_values($array) = retorna um novo array com os valores do array do poassado como parâmetro
 * array_merge($array1, $array2) = agrega o conteúdo dos dois arrays
 * array_pop($array) = exclui a última posição do array
 * array_shift($array) = exclui a primeira posição de um array
 * array_unshift($array, "valor") =  Adiciona um ou mais elementos no início do array
 * array_push($array, "valor" "valor") =  Adiciona um ou mais elementos no final de um array
 * array_combine($keys, $values) = mescla os dois arrays passados
 * array_sum() = Calcula a soma dos elementos de um array
 * explode("/", "20/01/2001") = transforma string em array
 * implode("-", $array) = transforma array em string
 */
$nomes = array("Rodrigo", "Carlos", "Neusa", "Talita");
$string = implode(", ", $nomes);
echo $string;
/* Função: is_array, exemplo:
$nomes = array("Primo"=>"Rodrigo","Vizinho"=> "Felipe","Mãe"=> "Maria","Pai"=> "José");
var_dump(is_array($nomes));

if(is_array($nomes)):
	echo "É um array!";
else:
	echo "Não é um array!";
endif;
*/

/* Função in_array, exemplo:
$nomes = array("Primo"=>"Rodrigo","Vizinho"=> "Felipe","Mãe"=> "Maria","Pai"=> "José");
echo in_array("Felipe", $nomes);
if (in_array("Felipe", $nomes)):
	echo "Existe no array";
else:
	echo "Não existe no array";
endif;
*/

/* Função array_keys, exemplo:
$nomes = array("Primo"=>"Rodrigo","Vizinho"=> "Felipe","Mãe"=> "Maria","Pai"=> "José");
$keys = array_keys($nomes);
print_r($keys);
*/

/* Função array_values, exemplo:
$nomes = array("Primo"=>"Rodrigo","Vizinho"=> "Felipe","Mãe"=> "Maria","Pai"=> "José");
$values = array_values($nomes);
print_r($values);
*/
/* Função array_merge, exemplo:
$carros = array("Camaro", "Uno", "Gol");
$motos = array("Pop100", "50cc", "cb1000");
$veiculos = array_merge($carros, $motos);
print_r($veiculos);
*/

/* Função array_pop, exemplo:
$carros = array("Camaro", "Uno", "Gol");
print_r($carros);
echo "<br>";
echo array_pop($carros);
echo "<br>";
print_r($carros);
*/

/* Função array_shift, exemplo:
$carros = array("Camaro", "Uno", "Gol");
print_r($carros);
echo "<br>";
echo array_shift($carros);
echo "<br>";
print_r($carros);
*/

/* Função array_unshift, exemplo:
$frutas = array("Uva", "Laranja", "Maçã");
print_r($frutas);
array_unshift($frutas, "Manga", "Acerola", "Morango");
echo "<br>";
print_r($frutas);
*/

/* Função array_push, exemplo:
$frutas = array("Uva", "Laranja", "Maçã");
print_r($frutas);
array_push($frutas, "Manga", "Acerola", "Morango");
echo "<br>";
print_r($frutas);
*/

/* Função array_combine, exemplo:
$keys = array("Campeão", "Vice", "Terceiro");
$values = array("Vasco", "Flamengo", "Botafogo");
$times = array_combine($keys, $values);
print_r($times);
*/

/* Função array_sum, exemplo:
$soma = array(7.8, 5.5, 10, 7.2);
$total =array_sum($soma);
echo $total;
*/

/* Função explode, exemplo:
$data = "30/02/2018";
$novaData = explode('/', $data);
print_r($novaData);
// Exemplo 2:
$frase = "Meu nome não é Johnny";
$array = explode(" ", $frase);
print_r($array);
*/

/* Função implode,exemplo:
$nomes = array("Rodrigo", "Carlos", "Neusa", "Talita");
$string = implode(", ", $nomes);
echo $string;
*/