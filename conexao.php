<?php
// Data Source Name
// driver; endereço; nome do banco de dados; subconjunto de caracteres
$DSN = "mysql:host=fdb25.awardspace.net;dbname=3451184_crud;charset=utf8";
$usuario = "3451184_crud";
$senha = "Crud%System08";
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

?>