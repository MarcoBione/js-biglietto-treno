
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

//Età passeggero
let UserAge = prompt('Inserire la propria età');

//KmPrice
let Kmprice = 0.21;

//20%discount
const Discount20 = 20;

//40%discount
const Discount40 = 40;

//finalprice
let Price ='';
