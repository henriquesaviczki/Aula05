$(document).ready(
    function(){
    }
);

$('#bt_inicio').click(
    function(){
        alert("Você clicou no inicio!");
    }
);

$('#bt_sobre').click(
    function(){
        $('#corpo').load("pages/sobre.html");
    }
);

$('#bt_cadastro').click(
    function(){
        $('#corpo').load("pages/cadastro.html");
    }
    
   


);