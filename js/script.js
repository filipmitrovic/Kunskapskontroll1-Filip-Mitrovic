// -----------------Byter ut ett foto till en annan på card 1----------------------
function imgChanger(imgURL_1, imgURL_2) {
    let img = document.querySelector('.art-1 img');
    let leftCard = document.querySelector('.art-1 figure');
    leftCard.addEventListener('click', () => {
        img.classList.toggle('toggle-img');
        if (img.classList.toggle('toggle-img')) {
            img.src = imgURL_2;
            img.classList.toggle('toggle-img');
        } else {
            img.src = imgURL_1;
            img.classList.toggle('toggle-img');
        }
    });
    leftCard.addEventListener('mouseover', e => {e.target.style.cursor = 'pointer'});
}
imgChanger('img/hoodie-forrest.png', 'img/hoodie-ash.png');


// -----------------Ändra bakgrundsfärg på cards när man klickar på knapparna---------------------
function cardBgChanger(colorArr) {
    let cards = document.querySelectorAll('main article'); 
    let btns = document.querySelectorAll('main article button'); 
    for (let i = 0; i < cards.length; i++) { 
        btns[i].addEventListener('click', () => cards[i].style.backgroundColor = `${colorArr[i]}`)
    }
}
cardBgChanger(['lightcoral', 'lightblue', 'lightgreen']);


// -----------------Ändrar texten och färg på knapparna när man klickar på dem samt h2 på kortet---------------------
function btnChanger(textArr, colorArr, headerText) {
    let cardHeadings = document.querySelectorAll('main article h2');
    let btns = document.querySelectorAll('main article button');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', e => {
            cardHeadings[i].textContent = headerText;
            e.target.textContent = `Press ${textArr[i]}`;
            e.target.style.backgroundColor = colorArr[i]; 
        });
    }
}
btnChanger(['btn 1', 'btn 2', 'btn 3'], ['coral', 'blue', 'green'], 'changed header');


// -----------------Ta bort loggan när man klickar på den---------------------
function elementRemover(cssSelector) {
    let element = document.querySelector(cssSelector);
    element.addEventListener('click', e => e.target.parentElement.removeChild(element));
    element.addEventListener('mouseover', e => e.target.style.cursor = 'pointer');
}
elementRemover('header img');


// -----------------Lägg till en lista var som helst i DOMen ----------------------
function renderList(DOMLocation, parentElement, listBorderStyle, rowAmount) {
    let ul = document.createElement('ul');
    parentElement.insertBefore(ul, DOMLocation);
    for (let i = 0; i < rowAmount; i++) {
        let li = document.createElement('li');
        li.style.border = listBorderStyle;
        li.textContent = 'dummy text';
        ul.appendChild(li);
    }
}
renderList(document.body.children[2], document.body, '1px solid black', 4);


// -----------------En knapp som återställer allt till originalutseendet----------------------
let container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
document.body.insertBefore(container, document.body.children[1]);

let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset to original look';
container.appendChild(resetBtn);


// -----------------Knappen lyssnar på click och återställer allt till orginal utseende----------------------
resetBtn.addEventListener('click', () => {

    // Byter ut till orginal foto på card 1
    let img = document.querySelector('.art-1 img');
    img.src = 'img/hoodie-ash.png';

    // Gör om cards till orginal utseende 
    let cards = document.querySelectorAll('main article'); 
    let btns = document.querySelectorAll('main article button'); 
    let cardHeadings = document.querySelectorAll('main article h2');
    for (let i = 0; i < cards.length; i++) { 
        cards[i].style.backgroundColor = 'white';
        btns[i].textContent = 'buy';
        btns[i].style.backgroundColor = 'black';
        cardHeadings[i].textContent = 'Sinus Hoodie';
    }

    // Renderar ut loggan 
    let DOMLogo = document.querySelector('.logo');
    if (DOMLogo === null) {
        let logo = document.createElement('img');
        logo.src = 'img/sinus-logo.svg';
        logo.alt = 'sinus';
        logo.classList.add('logo', 'random-class')
        let header = document.querySelector('header');
        header.insertBefore(logo, header.children[0]);
    }
    
    // tar bort listan från DOM:n
    let ul = document.querySelector('ul')
    document.body.removeChild(ul)
});