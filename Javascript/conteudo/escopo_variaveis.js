// 3 escopos: global, função e bloco
var serie = 'Vikings';

// escopo de bloco
if(true) {
    var serie2 = 'Game of Thrones';
    document.write(serie);
}

document.write(serie2);
document.write('<br />');

// escopo função
function x() {

    // var serie3 = 'The Walking Dead';
    document.write(serie);
    document.write(serie2);
}

x();

/*document.write('<br />');
document.write(serie3);*/