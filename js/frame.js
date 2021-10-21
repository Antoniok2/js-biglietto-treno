/* Chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

// Richiesto a utente quanti KM deve percorrere 
let nKmT = parseInt(prompt("salve, quanti chilometri deve percorrere per arrivare a destinazione?"));
console.log(nKmT);

//Richiesto a utente quanti anni ha
let yearsUser = parseInt(prompt("Cortesemente, inserisca qui la sua età"));
console.log(yearsUser);

// Ricavo il costo del biglietto
let priceTicket = nKmT * 0.21;
console.log(priceTicket);

// Sconto in base all'eta
if (yearsUser < 18) {
    priceTicket = priceTicket - (priceTicket * 20 / 100);
} else if (yearsUser > 64) {
    priceTicket = priceTicket - (priceTicket * 40 / 100);
}

// Formula di arrotondamento a 2 decimali
let aroundNu = Math.round((priceTicket + Number.EPSILON) * 100) / 100;

document.getElementById('biglietto').innerHTML = `Il suo biglietto costa: €${aroundNu}`;