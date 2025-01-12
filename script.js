let allCards = document.querySelectorAll('.card');
let activeKurser = [];
let arkiveratKurser = [];
allCards.forEach(card => {
    if(card.classList.contains('Arkiverat')) {
        arkiveratKurser.push(card);
    }
    else{
        activeKurser.push(card);
    }
})

let toggleActiveKurserBtn = document.querySelector('.activeBtn');
let toggleArkiveratKurserBtn = document.querySelector('.arkiveratBtn');
let toggleAllaKurserBtn = document.querySelector('.allaBtn');
let kurseContainer = document.querySelector('.kursGrid');
toggleActiveKurserBtn.addEventListener('click', () => {
    kurseContainer.innerHTML = '';
    for (let kurser of activeKurser) {
        kurseContainer.append(kurser);
    }
    if(kurseContainer.innerHTML === '') {
        kurseContainer.innerHTML= "<h2>Inga kurser hittades</h2>"
    }
})
toggleArkiveratKurserBtn.addEventListener('click', () => {
    kurseContainer.innerHTML = '';
    for (let kurser of arkiveratKurser) {
        kurseContainer.append(kurser);
    }
    if(kurseContainer.innerHTML === '') {
        kurseContainer.innerHTML= "<h2>Inga kurser hittades</h2>"
    }
})
toggleAllaKurserBtn.addEventListener('click', () => {
    kurseContainer.innerHTML = '';
    for (let kurser of allCards) {
        kurseContainer.append(kurser);
    }
    if(kurseContainer.innerHTML === '') {
        kurseContainer.innerHTML= "<h2>Inga kurser hittades</h2>"
    }
})