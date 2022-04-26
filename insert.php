<?php

require './conexao.php';
require './controller.php';



$nome = $_POST['name'];
$nota1 = $_POST['nota1'];
$nota2 = $_POST['nota2'];
$nota3 = $_POST['nota3'];
$media = (($nota1+$nota2+$nota3)/3);

$insert = "INSERT INTO tbAlunos (id,nome, nota1, nota2, nota3, media) VALUES (null, :nome, :nota1, :nota2, :nota3, :media)";
echo $insert;
$salvar = $conexao->prepare($insert);

    $salvar->bindParam(':nome', $nome);
    $salvar->bindParam(':nota1', $nota1);
    $salvar->bindParam(':nota2', $nota2);
    $salvar->bindParam(':nota3', $nota3);
    $salvar->bindParam(':media', $media);

    if($salvar->execute()) echo "insert bem sucedido"; else echo "erro";


?>