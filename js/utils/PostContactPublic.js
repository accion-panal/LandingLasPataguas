import { PropertyData } from "../Data/userId.js";

const form = document.getElementById('form-contact-public');

let userCompanyId = PropertyData.companyId;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let respuestaCorrect = document.getElementById('respuesta_ok');
    let respuestaError = document.getElementById('respuesta_error');

    let fullName = document.getElementById('nombre');
    let email = document.getElementById('email');
    let address = document.getElementById('address');

    let selectOperation = document.getElementById('operationType');
    let selectProperty = document.getElementById('typeOfProperty');
    let selectRegion = document.getElementById('regionText');
    let comuna = document.getElementById('communeText');

    if (selectOperation.value === '0' || selectProperty.value === '0' || selectRegion.value === '0' || comuna.value === '' ||
        fullName.value === '' || email.value === '' || address.value === '' ) {
            respuestaError.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size:13px;">
          Los campos no deben estar vacios.
         <button type="button" class="btn-close text-end" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
         setTimeout(function () {
            // Ocultar alerta despues de 5seg
            respuestaError.innerHTML = '';
        }, 5000);

        return;
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "companyId": userCompanyId,
        "typeProperty": selectProperty.value,
        "action": selectOperation.value,
        "fullName": fullName.value,
        "email": email.value,
        "region": selectRegion.value,
        "commune": comuna.value,
        "address": address.value,
        "landArea": "string",
        "termsAndConditions": true
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        //   redirect: 'follow'
    };

    fetch("https://aulen.partnersadvisers.info/contact/2/", requestOptions)
        .then(response => response.text())
        .then((result) => {
            //result: 'ok' + message: 'Mensaje guardado'
            console.log(result)
            if (result.status === 'ok') {
                //Vaciar Inputs
                fullName.value = '';
                email.value = '';
                address.value = '';
                selectOperation.value = '0';
                selectProperty.value = '0';
                selectRegion.value = '0';
                comuna.value = '';
                //Mensaje de Alerta : Success
                respuestaCorrect.innerHTML = `<div class="alert alert-success" role="alert">
                Formulario enviado exitosamente, Muchas gracias ${fullName.value}!!
               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
               </div`;
                setTimeout(function () {
                    // Ocultar alerta despues de 5seg
                    respuestaCorrect.innerHTML ='';
                }, 5000);
                return;
            }
            // console.log('error: ',result.status);
        })
        .catch((error) => {
            //Mensaje de Alerta : Error
            respuestaError.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size:13px;">
            Los campos no deben estar vacios.
           <button type="button" class="btn-close text-end" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>`;;
            console.log('Error: ', error);
            setTimeout(function () {
                // Ocultar alerta despues de 5seg
                respuestaError.innerHTML = '';
            }, 5000);
        })

});