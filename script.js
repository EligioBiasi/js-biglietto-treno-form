// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
const inputKilometers = document.getElementById('kilometers');
const inputAge = document.getElementById('age');
const button = document.querySelector('button.send');

console.log(inputKilometers.innerHTML);
console.log(inputAge.innerHTML);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.233 € al km)
// va applicato uno sconto del 19.4% per i minorenni
// va applicato uno sconto del 37.7% per gli over 65.


