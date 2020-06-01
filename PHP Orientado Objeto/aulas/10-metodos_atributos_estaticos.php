<?php

class Login {

    public static $user;

    public static function verificaLogin(){
        echo "O usúario ".self::$user." está logado!";
    }

    public function sairSistema() {
        echo "O usuario deslogou";
    }
}

$login = new Login();
$login->sairSistema();