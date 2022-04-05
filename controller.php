<?php 
    require "./aluno.php";

    $alunos = [];

   function handleCreateAluno($array, $name, $v1, $v2, $v3) {

        $novoAluno = new Aluno($name, $v1, $v2, $v3);
        $arrayAluno = json_encode($novoAluno);
        array_push($array, $arrayAluno);
        return $array;
     
    };

   $alunos = handleCreateAluno($alunos, "Yão", 10, 10, 10);
   $alunos = handleCreateAluno($alunos, "Carlão", 10, 10, 10);
   $alunos = handleCreateAluno($alunos, "Yão", 10, 10, 10);
    


   

    echo "<br>";
    print_r($alunos);
    
?>