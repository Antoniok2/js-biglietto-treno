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