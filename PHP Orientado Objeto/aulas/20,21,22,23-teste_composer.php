<?php
require_once 'vendor/autoload.php';

use Cocur\Slugify\Slugify;

$slug = new Slugify();
$slug->addRule('ão', 'Funcionou');
echo $slug->slugify('Teste com acentuação para geração de slug', '_');