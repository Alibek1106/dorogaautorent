import { listOfCars } from "./cars-list.js"
import { openModal } from "./modal.js";
import { createCards } from "./createCards.js"

// CONTACT MODAL

openModal()

const connectBtn = document.querySelector('.connect-btn');
const connectBtn2 = document.querySelector('.connect-btn-2')
const contactModal = document.querySelector('.contact-modal')

connectBtn.addEventListener('click', () => {
    contactModal.style.display = "block";
})

connectBtn2.addEventListener('click', () => {
    contactModal.style.display = "block";
})

// MAIN-PAGE CARDS

const cards = document.querySelector('.cards')


const mainPageCars = () => {
    for (let i = 0; i < listOfCars.length; i++){
        if (listOfCars[i].carClass === "vip"){
            createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price)
        }
    }
}

mainPageCars()