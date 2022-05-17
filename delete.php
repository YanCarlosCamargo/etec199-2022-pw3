<?php 

require './conexao.php';


$id = 14;

 
        $sql = 'DELETE FROM tbAlunos '. 'WHERE Id = :id';

        

        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':id', $id);

        $below = $stmt->rowCount();

        $stmt->execute();

    $after = $stmt->rowCount();


     

    $result = ($below <= $after ? 'Deu Certo! Foi deletado.' :  "Deu Errado! Não deletou.");
 
    echo $result;
?>