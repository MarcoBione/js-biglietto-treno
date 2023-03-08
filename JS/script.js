
//EXERCISE
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

//variables

//Km
let UserKm = prompt('inserire la quantità dei Km da percorere');

//check
console.log(UserKm);

//Userage
let UserAge = prompt('Inserire la propria età');

//check
console.log(UserAge);

//KmPrice
let Kmprice = 0.21;

//20%discount
const Discount20 = 20;

//40%discount
const Discount40 = 40;

//price
let Price ='';

//finalprice
let FinalPrice ='';


//check if the user put correct values
if(!isNaN(UserKm) && !isNaN(UserAge)){

    let FinalPrice = UserKm * Kmprice;
    console.log(FinalPrice);
    document.getElementById('price').innerHTML = `
    <p>Il prezzo del suo biglietto:${FinalPrice}&euro;</p>
    `;
} else{
    document.getElementById ('ticket').innerHTML =`
    <p>I valori da lei inseriti non sono corretti, perfavore ritenti!</p>
    `;
}