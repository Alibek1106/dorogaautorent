const basketSide = document.querySelector('.basket');
const basketStorage = JSON.parse(localStorage.getItem('basket')) || []

const renderBasket = (cartItems) => {  
    if (cartItems.length && Array.isArray(cartItems)){
        cartItems?.forEach(el => {
            const { carImage, carPrice, carModel, carBrand, carYear, carType, carVolume } = el
            const basketCard = document.createElement('div');
            
            basketCard.className = "card"

            const btnDelete = document.createElement('div')
            btnDelete.className = 'reserve-btn'
            const realBtn = document.createElement('button')
            realBtn.className = 'reserve-button'
            realBtn.innerText = 'Удалить'
            btnDelete.append(realBtn)

            btnDelete.addEventListener('click', () => {
                deleteCardFromBasket(el.id)
            })
            basketCard.innerHTML = 
            `
            <div class="card-img">
                <img src="${carImage}">
                <div class="car-price">${carPrice + "сом/день"}</div>
            </div>
            <div class="card-info">
                <h3 class="name-of-car">${carBrand + ' ' + carModel}</h3>
                <div class="car-descr">
                    <span>${carYear}</span>
                    <span>${carType}</span>
                    <span>${"Объем - " + carVolume + "л."}</span>
                </div>
            </div>
            `
            basketCard.appendChild(btnDelete)
            basketSide.appendChild(basketCard)
        });
    }
}

renderBasket(basketStorage)


function deleteCardFromBasket(id){
    const basketStorage = JSON.parse(localStorage.getItem('basket')) || [];     
    const newBasketStorage = basketStorage?.filter(card => card.id !== id)
    localStorage.setItem('basket', JSON.stringify(newBasketStorage))
    basketSide.innerHTML=''
    renderBasket(newBasketStorage)
}