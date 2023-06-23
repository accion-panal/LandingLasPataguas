import { cardComments } from "../Data/userId.js";

const loadInformation = ()=> {
    const {cards} = cardComments;

let card = document.getElementById('card-comment');
if (card != null){
    card.innerHTML = cards.map((data)=>`
    <div class="item">
        <div class="custom-media-v2">
            <img src="${data.img}" alt="Image" class="img-fluid person">
            <div class="author">Por: ${data.author}</div>
            <h3>${data.subtitle}</h3>
            <p>${data.comment}</p>
        </div>
    </div>
    `   
    ).join('');
}

};

loadInformation();