import { listOfCars } from "./cars-list.js";

const cards = document.querySelector(".cards")

export const createCards = (j, carBrand, carModel, carImage, carYear, carType, carVolume, carPrice, id) => {
    const card = document.createElement('div');
    const cardImg = document.createElement('div');
    const cardImage = document.createElement('img');
    const carsPrice = document.createElement('div');
    const cardInfo = document.createElement('div');
    const nameOfCar = document.createElement('h3');
    const carDescr = document.createElement('div');
    const yearSpan = document.createElement('span');
    const typeSpan = document.createElement('span');
    const volumeSpan = document.createElement('span');
    const reserveBtn = document.createElement('div');
    const reserveButton = document.createElement('button');
    
    card.className = "card";
    cardImg.className = "card-img";
    carsPrice.className = "car-price";
    cardInfo.className = "card-info";
    nameOfCar.className = "name-of-car";
    carDescr.className = "car-descr";
    reserveBtn.className = "reserve-btn";
    reserveButton.className = "reserve-button";
    
    nameOfCar.innerHTML = carBrand + " " + carModel
    cardImage.src = carImage;
    yearSpan.innerHTML = carYear
    typeSpan.innerHTML = carType
    volumeSpan.innerHTML = "Объем - " + carVolume + "л."
    carsPrice.innerHTML = carPrice + "Сом/День"
    reserveButton.innerHTML = "Добавить в корзину"
    reserveButton.addEventListener('click', () => {
        const basketStorage = localStorage.getItem('basket') || "[]"
        const basket = JSON.parse(basketStorage)
        const newCard = { carImage, carPrice, carModel, carBrand, carYear, carType, carVolume, id }
        localStorage.setItem('basket', JSON.stringify([...basket, newCard]))
    })

    cards.appendChild(card);
    card.appendChild(cardImg);
    cardImg.appendChild(cardImage);
    cardImg.appendChild(carsPrice);
    card.appendChild(cardInfo);
    cardInfo.appendChild(nameOfCar);
    cardInfo.appendChild(carDescr);
    carDescr.appendChild(yearSpan);
    carDescr.appendChild(typeSpan);
    carDescr.appendChild(volumeSpan);
    card.appendChild(reserveBtn);
    reserveBtn.appendChild(reserveButton);
}