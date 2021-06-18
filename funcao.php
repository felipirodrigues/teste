<?php
function validacao(){
if(isset($_POST['email']) and isset($_POST['senha'])){
    echo "Usuário: ". $_POST['email']."</br>";
    echo "Senha: ".$_POST['senha']."</br>";
}
else{
    echo "Preencha todos os campos";
}
}
?>