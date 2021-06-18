function fazerAcao(){
    //var texto = prompt('Qual o texto?');
    //document.getElementById('texto').innerHTML=texto;
}

function adicionar(){
    var ing = document.getElementById('ingrediente').value;
    var listahtml = document.getElementById('lista').innerHTML;

    listahtml = listahtml + '<li>' + ing + '</li>';

    document.getElementById('lista').innerHTML=listahtml;
}

function resultado(){
    var num1;
}

var teste = ["Telha", "prego", "areia", "tijolo"];