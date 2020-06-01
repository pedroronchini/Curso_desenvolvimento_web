<?php
// Sets
require_once 'vendor/autoload.php';

/*$produto = new \App\Model\Produto();
$produto->setId(2);
$produto->setNome('Microfone AT2020');
$produto->setDescricao('Mricofone Condensador');*/

$produtoDao = new \App\Model\ProdutoDao();
$produtoDao->delete(2);
$produtoDao->read();

foreach($produtoDao->read() as $produto) {
    echo $produto['nome']."<br>".$produto['descricao']."<hr>";
}