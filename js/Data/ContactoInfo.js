import { ContactInformation } from "../Data/userId.js";

const loadInformation = () => {
    
    let listHorario = document.getElementById('contact-info');
    if( listHorario != null){
        listHorario.innerHTML = `
        <ul class="links list-unstyled">
            <li><span><i class='bx bx-envelope fs-6'></i><a href="#" style="text-decoration: none;"> ${ContactInformation.email}</a></span></li>
            <li><span><i class='bx bx-phone-call fs-5' ></i><a href="#" style="text-decoration: none;">${ContactInformation.phone} </a></span></li>
        </ul>`
    }
    
}

loadInformation();