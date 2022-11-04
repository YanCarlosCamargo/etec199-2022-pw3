<?php
require './conexao.php';
require "./aluno.php";
;
function listarAlunos($conexao){
    $sql = "SELECT * FROM tbAlunos";

    $resultados = [];

    $rs = $conexao->query($sql);
    while($row = $rs->fetch(PDO::FETCH_OBJ)){
        $aluno = new Aluno(
            $row->Id,
            $row->nome,
            $row->nota1,
            $row->nota2,
            $row->nota3,
            $row->media,
        );
        array_push($resultados, $aluno);
    }
    return $resultados;
}
$list= listarAlunos($conexao);
$json_aluno = json_encode($list);
echo $json_aluno;

?>