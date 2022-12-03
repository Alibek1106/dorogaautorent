import { listOfCars } from "./cars-list.js"
import { openModal } from "./modal.js";
import { createCards } from "./createCards.js"

openModal()

const searchBtn = document.querySelector('.catalog-search-btn');
const catalogCards = document.querySelector('.cards');

for (let i = 0; i < listOfCars.length; i++){
    createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
}

searchBtn.addEventListener('click', () => {
    if (document.getElementById('radio-all').checked) {
        catalogCards.replaceChildren()
        for (let i = 0; i < listOfCars.length; i++){
            createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
        }
    }else if(document.getElementById('radio-vip').checked) {
        catalogCards.replaceChildren()
        for (let i = 0; i < listOfCars.length; i++){
            if (listOfCars[i].carClass === "vip"){
                createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
            }
        }
    }else if(document.getElementById('radio-average').checked) {
        catalogCards.replaceChildren()
        for (let i = 0; i < listOfCars.length; i++){
            if (listOfCars[i].carClass === "average"){
                createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
            }
        }
    }else if(document.getElementById('radio-eco').checked) {
        catalogCards.replaceChildren()
        for (let i = 0; i < listOfCars.length; i++){
            if (listOfCars[i].carClass === "eco"){
                createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
            }
        }
    }else if(document.getElementById('radio-retro').checked) {
        catalogCards.replaceChildren()
        for (let i = 0; i < listOfCars.length; i++){
            if (listOfCars[i].carClass === "retro"){
                createCards(i, listOfCars[i].brand, listOfCars[i].model, listOfCars[i].image, listOfCars[i].year, listOfCars[i].type, listOfCars[i].volume, listOfCars[i].price, listOfCars[i].index)
            }
        }
    }
})

const renderCars = () => {
    const basketStorage = localStorage.getItem('basket') || "[]"
    const basket = JSON.parse(basketStorage)

    listOfCars.forEach(car => {
        btn.addEventListener('click', () => {
            
        })
    })
}



