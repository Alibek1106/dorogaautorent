const basketSide = document.querySelector('.basket');
const basketStorage = JSON.parse(localStorage.getItem('basket')) || "[]"

if (basketStorage.length){
    basketStorage.forEach(el => {
        const { cardImg, cardPrice, cardName, cardYear, cardType, cardVolume } = el
        const basketCard = document.createElement('div');
        basketCard.className = "card"
        console.log(cardPrice)
        basketCard.innerHTML = 
        `
        <div class="card-img">
            <img src="${cardImg}">
            <div class="car-price">${cardPrice}</div>
        </div>
        <div class="card-info">
            <h3 class="name-of-car">${cardName}</h3>
            <div class="car-descr">
                <span>${cardYear}</span>
                <span>${cardType}</span>
                <span>Объем - ${cardVolume}л.</span>
            </div>
        </div>
        <div class="reserve-btn">
            <button class="reserve-button>Удалить</button>
        </div>
        `
        basketSide.appendChild(basketCard)
    });
}