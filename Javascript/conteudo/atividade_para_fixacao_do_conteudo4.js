function acionaCampo() {
    document.getElementById('campo').style.background = 'yellow';
}

function validaCampo() {
    let valorCampo = document.getElementById('campo').value;

    if(valorCampo.length < 3) {
        document.getElementById('campo').style.background = 'red';
    }else{
        document.getElementById('campo').style.background = 'green';
    }
}