<?php
// Data Source Name
// driver; endereço; nome do banco de dados; subconjunto de caracteres
$DSN = "mysql:host=fdb30.awardspace.net;dbname=3717026_bdescola;charset=utf8";
$usuario = "3717026_bdescola";
$senha = "YanCarlos000!";
// Tratamento de erro
try {
    // Classe PFO de conexão
    $conexao = new PDO($DSN, $usuario, $senha);
    //echo 'Conectou com sucesso!';
} catch (PDOException $erro) {
    echo $erro->getMessage();
    // Fecha conexão
    exit;
}