window.addEventListener('load', empezar);
function empezar() {
    let accion=document.getElementById("validar");
    accion.onsubmit=inicio;

    function inicio() {
        let avanzar = true;

        //Primera validación modo máquina bro
        let usuario = document.querySelector('#idUsuario').value;
        let smUsu = document.querySelector('#smUsuario');

        if (usuario.length < 3) {
            avanzar = false;
            smUsu.textContent = "Número de carácteres inferior al permitido"
        } else {
            smUsu.textContent = "";
        } return avanzar;
    }
    
}