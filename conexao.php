<?php
// Data Source Name
// driver; endereço; nome do banco de dados; subconjunto de caracteres
function testarConexao(){
$DSN = "mysql:host=fdb25.awardspace.net;dbname=3451184_crud;charset=utf8";
$usuario = "3451184_crud";
$senha = "Crud%System08";
// Tratamento de erro
try {
    // Classe PFO de conexão
   return $conexao = new PDO($DSN, $usuario, $senha);
  
} catch (PDOException $erro) {
   return echo $erro->getMessage();

    exit;
}
}

$conexao = testarConexao();
?>