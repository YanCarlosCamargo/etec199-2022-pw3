<?php 

require './conexao.php';


$id = $_POST['id'];

 function deleteTask($conexao,$id) {
        $sql = 'DELETE FROM tbAluno '. 'WHERE Id = :id';

        

        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':id', $id);

        $below = $stmt->rowCount();

        $stmt->execute();

    $after = $stmt->rowCount();


        return ($below >= $after ? 'Deu Certo! Foi deletado.' :  "Deu Errado! Não deletou.");
    }

    $result = deleteTask($id);
    echo $result;
?>