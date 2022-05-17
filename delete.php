<?php 

require './conexao.php';


$id = $_POST['id'];

 
        $sql = 'DELETE FROM tbAlunos '. 'WHERE Id = :id';

        

        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':id', $id);

        $below = $stmt->rowCount();

        $stmt->execute();

    $after = $stmt->rowCount();


     


?>