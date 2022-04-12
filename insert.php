<?php

require './conexao.php';


$nome = "yão";
$nota1 = 10;
$nota2 = 10;
$nota3 = 10;
$media = (($nota1+$nota2+$nota3)/3);

$insert = "INSERT INTO tbAlunos (nome, nota1, nota2, nota3, media) VALUES (':nome', :nota1, :nota2, :nota3, :media)";
echo $insert;
$salvar = $conexao->prepare($insert);

    $salvar->bindParam(':nome', $nome);
    $salvar->bindParam(':nota1', $nota1);
    $salvar->bindParam(':nota2', $nota2);
    $salvar->bindParam(':nota3', $nota3);
    $salvar->bindParam(':media', $media);

    if($salvar->execute()) echo "insert bem sucedido"; else echo "erro";


?>