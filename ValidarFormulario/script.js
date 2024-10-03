window.addEventListener('load', empezar);

function empezar() {

    let accion = document.getElementById('validar');

    accion.onsubmit = inicio;

    function inicio() {

        let avanzar = true;

        //Primer validación cuadro de texto: entre 3 y 5
        let expediente = document.querySelector('#idExpediente');
        let contExp = expediente.value;
        let smExp = document.querySelector('#smExpediente');


        if (contExp.length < 3 || contExp.length > 5) {
            avanzar = false;
            smExp.textContent = "Debe contener entre 3 y 5 carácteres";
        } else if (isNaN(contExp)) {
            avanzar = false;
            smExp.textContent = "Debe tener un valor numérico"
        } else {
            smExp.textContent = '';
        }
        //Segunda validación Nombre: al menos 3 carácteres y solo letras
        let nombre = document.querySelector('#idNombre').value;
        let smNom = document.querySelector('#smNombre');

        if (nombre.length < 3) {
            avanzar = false;
            smNom.textContent = "Número de carácteres inferior al permitido"
            //IndexOf averigua si hay al menos un número dentro del nombre
        } else if (/[0-9]/.test(nombre)) {  // Verifica si hay algún número en el nombre
            avanzar = false;
            smNom.textContent = "Solo carácteres alfabéticos [A-Z]";

        } else {
            smExp.textContent = "";
        }

        //Tercera validación Apellido: al menos 3 carácteres y solo letras
        let apellido = document.querySelector('#idApellido').value;
        let smApe = document.querySelector('#smApellido');

        if (apellido.length < 3) {
            avanzar = false;
            smApe.textContent = "Número de carácteres inferior al permitido"
            //IndexOf averigua si hay al menos un número dentro del nombre
        } else if (/[0-9]/.test(apellido)) {  // Verifica si hay algún número en el nombre
            avanzar = false;
            smApe.textContent = "Solo carácteres alfabéticos [A-Z]";

        } else {
            smExp.textContent = "";
        }

        //Cuarta validación: 
        let SGE = document.querySelector('#idSGE').value;
        let smSge = document.querySelector('#smSGE');

        if (SGE <= 0 || SGE > 10) {

            avanzar = false;
            smSge.textContent = 'La nota debe estar entre 1 y 10';
        } else if (isNaN(SGE)) {

            avanzar = false;
            smSge.textContent = 'Este campo debe contener solo valores numéricos';
        } else {
            smSge.textContent = '';
        }

        //Quinta validación: 
        let DI = document.querySelector('#idDI').value;
        let smDi = document.querySelector('#smDI');

        if (DI <= 0 || DI > 10) {

            avanzar = false;
            smDi.textContent = 'La nota debe estar entre 1 y 10';
        } else if (isNaN(DI)) {

            avanzar = false;
            smDi.textContent = 'Este campo debe contener solo valores numéricos';
        } else {
            smDi.textContent = '';
        }

        //Sexta validación
        let AD = document.querySelector('#idAD').value;
        let smAd = document.querySelector('#smAD');

        if (AD <= 0 || AD > 10) {

            avanzar = false;
            smAd.textContent = 'La nota debe estar entre 1 y 10';
        } else if (isNaN(AD)) {

            avanzar = false;
            smAd.textContent = 'Este campo debe contener solo valores numéricos';
        } else {
            smAd.textContent = '';
        }

        //Séptima validación
        let PSP = document.querySelector('#idPSP').value;
        let smPsp = document.querySelector('#smPSP');

        if (PSP <= 0 || PSP > 10) {

            avanzar = false;
            smPsp.textContent = 'La nota debe estar entre 1 y 10';
        } else if (isNaN(PSP)) {

            avanzar = false;
            smPsp.textContent = 'Este campo debe contener solo valores numéricos';
        } else {
            smPsp.textContent = '';
        }

        let PMM = document.querySelector('#idPMM').value;
        let smPmm = document.querySelector('#smPMM');

        if (PMM <= 0 || PMM > 10) {

            avanzar = false;
            smPmm.textContent = 'La nota debe estar entre 1 y 10';
        } else if (isNaN(PMM)) {

            avanzar = false;
            smPmm.textContent = 'Este campo debe contener solo valores numéricos';
        } else {
            smPmm.textContent = '';
        }

        return avanzar;


    }
}
