// Creo array contenete immagini
const imagesArray = ["../img/01.jpg", "../img/02.jpg", "../img/03.jpg", "../img/04.jpg", "../img/05.jpg", ]
// Prelevo il contenitore dove inserire array-items
const itemsContainer = document.querySelector(".slider-items")
console.log(itemsContainer);

// Creo per ogni item un elemento in html usando ciclo for
for (let i = 0; i < imagesArray.length; i++) {
    // Assegno a ogni immagine generata una costante
    const currentImage = imagesArray[i];
    console.log(currentImage);

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;
    
   itemsContainer.innerHTML += sliderItem;
}

// Creo punto di partenza (visualizzo immagine 0 di array)
// Prelevo i contenitori delle immagini in html
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

// Assegno alla posizione 0 dell'array la classe active creata su css
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
setInterval(autoSwap, 3000)
// GESTIONE BOTTONI NEXT PREV
// Creeo variabile buttons
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// gestisco click next
nextBtn.addEventListener("click", function() {
    // al click si riattiva il bottone per tornare indietro
    prevBtn.classList.remove("hidden");

    if (activeItemIndex < (itemsArray.length - 1)) {
        // rimuovo lo stato active dalla array-item
        itemsArray[activeItemIndex].classList.remove("active");

        // incremento la posizione dell'array
        activeItemIndex++;

        // rimetto lo stato active dalla array-item
        itemsArray[activeItemIndex].classList.add("active");
        
        // All'ultimo array-item rimuovo il bottone next
        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        };
    };
});

// Nascondo il prevBtn di default 
prevBtn.classList.add("hidden")
// gestisco il click prev
prevBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden")

    // rimuovo lo stato active dalla array-item
    itemsArray[activeItemIndex].classList.remove("active");

    // decremento la posizione dell'array
    activeItemIndex--;

    // rimetto lo stato active dalla array-item
    itemsArray[activeItemIndex].classList.add("active");
    
    // All'ultimo array-item rimuovo il bottone prev
    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    };
})

// Scrivo qui la parte della funzione auto-swap:
function autoSwap() {
    if (activeItemIndex < (itemsArray.length - 1)) {
        // // nascondo il prevBtn
        // prevBtn.classList.add("hidden");

        // rimuovo lo stato active dalla array-item
        itemsArray[activeItemIndex].classList.remove("active");

        // incremento la posizione dell'array
        activeItemIndex++;

        // rimetto lo stato active dalla array-item
        itemsArray[activeItemIndex].classList.add("active");
        
        // riattivo il .prevBtn
        prevBtn.classList.remove("hidden");

        // All'ultimo array-item rimuovo il bottone next
        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        }
    } else {
        // se siamo all'ultima posizione dell'array ripartiamo dal primo elemento
        itemsArray[activeItemIndex].classList.remove("active");
        activeItemIndex = 0;
        itemsArray[activeItemIndex].classList.add("active");

        // ripristino bottoni all situazione iniziale
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden")
    };
}