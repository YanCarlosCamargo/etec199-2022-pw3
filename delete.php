<?php 

require './conexao.php';


$id = $_POST['id'];

 public function deleteTask($id) {
        $sql = 'DELETE FROM tbAluno '. 'WHERE id = :id';

        

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);

        $below = $stmt->rowCount();

        $stmt->execute();

    $after = $stmt->rowCount();


        return ($below >= $after : echo 'Deu Certo! Foi deletado.'; echo "Deu Errado! Não deletou.")
    }

    $result = deleteTask($id);
    echo $result;
?>