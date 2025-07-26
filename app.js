function intentoUser(){
    let numUser =  parseInt(document.getElementById('valorUser').value);
    console.log(numUser);
    document.querySelector('#valorUser').value = '';
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function insertarTexto(elem,texto){
    let elemHTML = document.querySelector(elem);
    elemHTML.innerHTML = texto;
}

function generarNumSecreto(){
    return Math.floor(Math.random()*10)+1;
}

insertarTexto('h1','Juego del número secreto');
insertarTexto('p','Indica un número del 1 al 20');
