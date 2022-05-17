<?php 
    class Aluno {
        public $id;
        public $_nome;
        public $_nota1;
        public $_nota2;
        public $_nota3;
        public $_media;

    public function __construct ($name, $v1, $v2, $v3){
        $this->id = $id;
        $this->_nome = $name;
        $this->_nota1 = $v1;
        $this->_nota2 = $v2;
        $this->_nota3 = $v3;
        $this->_media = ($v1 + $v2 + $v3)/3;
    }
 }
?>