
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

//junior
let junior = 18;

//senior
let senior = 65;

//20%discount
const Discount20 = 20;

//DiscountJunior
let DiscountJunior = '';

//40%discount
const Discount40 = 40;

//DiscountSenior
let DiscountSenior = '';

//price
let Price = '';

//finalprice
let FinalPrice = '';


//check if the user put correct values
if (!isNaN(UserKm) && !isNaN(UserAge)) {

    
    if (UserAge <= junior) {
        //For under 18
        let DiscountJunior = ((UserKm * Kmprice) * Discount20 / 100).toFixed(2);
        console.log(DiscountJunior);
        //final calc
        let FinalPrice= ((UserKm * Kmprice) - DiscountJunior).toFixed(2);
        document.getElementById('price').innerHTML = `
        <p>Il prezzo del suo biglietto: ${FinalPrice}&euro;</p>
        <p>Con uno sconto pari a: ${DiscountJunior}&euro;</p>
        `;

    }else if (UserAge >= senior){
        //for senior over 65
        let DiscountSenior = ((UserKm * Kmprice) * Discount40 / 100).toFixed(2);
        console.log(DiscountSenior);
        //final calc
        let FinalPrice = ((UserKm * Kmprice) - DiscountSenior).toFixed(2);
        document.getElementById('price').innerHTML = `
        <p>Il prezzo del suo biglietto: ${FinalPrice}&euro;</p>
        <p>Con uno sconto pari a: ${DiscountSenior}&euro;</p>
        `;

    }else {
        //calc if the User is > 18 <65
        let FinalPrice = (UserKm * Kmprice).toFixed(2);
        console.log(FinalPrice);
        document.getElementById('price').innerHTML = `
        <p>Il prezzo del suo biglietto:${FinalPrice}&euro;</p>
        <p class="text-danger">Purtroppo non hai diritto ad uno sconto</p>
        `;
    }

}else {
    document.getElementById('ticket').innerHTML = `
    <p class="text-danger">I valori da lei inseriti non sono corretti, perfavore ritenti!</p>
    `;
}