// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
const inputKilometers = parseInt (document.getElementById('kilometers'));
const inputAge = parseInt (document.getElementById('age'));
const button = document.querySelector('button.send');


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.233 € al km)
let costPerKm = inputKilometers * 0.233;
let discount;
// va applicato uno sconto del 19.4% per i minorenni
// va applicato uno sconto del 37.7% per gli over 65.
if (inputAge<18){
    discount = ((costPerKm * 19.4) / 100);
} else if (inputAge > 65){
    discount = ((costPerKm * 37.7) / 100);
} else{
    discount = 0;
}
const finalcost = costPerKm - discount;

button.addEventListener('click', function(){
    console.log(document.getElementById('final-price').innerHTML += finalcost)
})




