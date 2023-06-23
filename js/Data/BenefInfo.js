import { BenefiInfo } from "../Data/userId.js";

const loadInformation = ()=> {
    const {cards} = BenefiInfo;

let card = document.getElementById('card-beneficio');
if (card != null){
    card.innerHTML = cards.map((data)=>`
    <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="service-block active">
            <div class="contents mb-5">
              <h3 class="text-center mb-5 color-benef-text"></h3>
              <table class="table table-borderless">
                <tbody>
                  <tr> 
                    <td><p class="color-benef-text"><b>${data.titleFirst}</b>${data.firstBeneficio}</p></td>
                    <td>
                      <i class='${data.icon} color-benef-text' style="font-size: 25px;"></i>
                    </td>
                  </tr>
                  <tr> 
                    <td><p class="color-benef-text"><b>${data.titleSecond}</b>${data.secondBeneficio}</p></td>
                    <td>
                      <i class='${data.icon} color-benef-text' style="font-size: 25px;"></i>
                    </td>
                  </tr>
                  ${data.yes != false ? `<tr> 
                  <td><p class="color-benef-text"><b>${data.titleThirth}</b>${data.thirthBeneficio}</p></td>
                  <td>
                    <i class='${data.icon} color-benef-text' style="font-size: 25px;"></i>
                  </td>
                </tr>`: ''}
                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
    `
    
    ).join('');
}

};

loadInformation();