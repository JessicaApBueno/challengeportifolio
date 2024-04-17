function openNav() {
    alert("teste")
}


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector(".main-title");
typeWriter(titulo);

