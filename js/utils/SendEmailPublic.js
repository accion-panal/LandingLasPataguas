import { RealtorSendEmailData } from "../Data/userId.js";

const formEmail = document.getElementById('form-contact-public');


formEmail.addEventListener('submit', function(e) {
    e.preventDefault();

let realtorMail = RealtorSendEmailData.public;

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
fullName.value === '' || email.value === '' || address.value === '') {
  respuestaError.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size:13px;">
  Los campos no deben estar vacios.
 <button type="button" class="btn-close text-end" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`
 setTimeout(() => {
  respuestaError.innerHTML = '';
 }, 5000);;

return;
}


fetch(`https://formsubmit.co/ajax/${realtorMail}`, {
  method: "POST",
  headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify({
    tipo_propiedad:selectProperty.value,
    tipo_operacion:selectOperation.value,
    Nombre_apellido: fullName.value,
    Correo : email.value,
    Region:selectRegion.value,
    Comuna:comuna.value,
    Dirección:address.value,
    termsAndConditions: true,
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error al enviar correo',error));

})