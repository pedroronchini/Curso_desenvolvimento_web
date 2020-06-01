<?php
$senha = "123456";
$senha_db = '$2y$10$SWLcJ7yHNme6CJeDAOgM5OeGS0.LW5Oc.5M3XwpydZpfkjLPlMmBC';


if(password_verify($senha, $senha_db)):
	echo "Senha válida";
else:
	echo "Senha inválida";
endif;
/*$senhaSegura = password_hash($senha, PASSWORD_DEFAULT);
echo $senhaSegura."<br>";

senha = "teste";

$novasenha =base64_encode($senha);
echo "base64:".$novasenha."<br>";
echo "Sua senha é: ".base64_decode($novasenha);

echo "<hr>";

echo "Md5: ".md5($senha)."<br>";
echo "Sha1: ".sha1($senha);*/