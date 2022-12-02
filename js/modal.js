export const openModal = () => {
    const contact = document.querySelector('.contact');
    const contactModal = document.querySelector('.contact-modal')
    const modalCloseBtn = document.querySelector('.modal-close')
    const modalSendBtn = document.querySelector('.modal-send')
    const modalInput = document.querySelector('.modal-input')
    
    
    contact.addEventListener('click', () => {
        contactModal.style.display = "block";
    });
    
    modalCloseBtn.addEventListener('click', () => {
        contactModal.style.display = "none";
    })
    
    modalSendBtn.addEventListener('click', () => {
        modalInput.value = ""
    })
}

