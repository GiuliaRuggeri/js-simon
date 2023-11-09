const randomNum = [];
let container = document.getElementById("container");

//Genera numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Inserisce i numeri random nell'array
function numList() {
    for (i = 0; i < 5; i++) {
        let number = getRndInteger(1, 100);
        randomNum.push(number);
        console.log("numerorandom", number);

    }

}

numList();

// Stampa i numeri random nel DOM
for (i = 0; i < randomNum.length; i++) {

    let numContainer = document.createElement("div");
    numContainer.innerHTML = randomNum[i]; 
    container.append(numContainer);

}

// Resetta il DOM
function reset() {
    container.innerHTML = "";

}

//Primo timer per far sparire i numeri
setTimeout(reset, 30000);

//Secondo timer per far apparire i prompt
setTimeout(askNumber, 31000);


//Funzione di controllo per verificare se i numeri inseriti dall'utente sono presenti nell'array
function askNumber() {
    let wordsFound=0;
    for (i = 0; i < 5; i++) {
        let numUtente = prompt("inserisci un numero");
        const numFind = findNumber(numUtente, randomNum);
        if (numFind) {
            console.log("numero trovato");
            wordsFound++;
            container.style.color="green";

        } else {
            console.log("numero non trovato");
        }

    }

    container.innerHTML=`Hai indovinato ${wordsFound} numeri!`
}

function findNumber(elementFound, list) {
    let found = false;
    for (let i = 0; i < list.length; i++) {
        const currentElement = list[i];
        if (currentElement == elementFound) {
            found = true;
        }
    }

    return found;
}

