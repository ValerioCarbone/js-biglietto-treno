// - Chiedere all'utente i km da percorrere
//   - Inizializzare una variabile che contiene il numero dei km scelti dall'utente
let userKm = prompt('Ciao, quanti kilometri vuoi percorrere?');
console.log(userKm);
//   - Transformare la stingra contenuta in userKm in un numero
userKm = parseFloat(userKm);
console.log(userKm);

// - Chiedere all'utente l'età
//   - Inizializzare una variabile che contiene l'età dell'utente
let userAge = prompt('Quanti anni hai?');
console.log(userAge);

//   - Transformare la stingra contenuta in userAge in un numero
userAge = parseInt(userAge);
console.log(userAge);

// - Calcolare il prezzo del viaggio
//   - Inizializzare una variabile che conterrà la moltiplicazione della variabile dei km per il prezzo per km
let ticketPrice = userKm * 0.21;
console.log(ticketPrice);

// - Applicare lo sconto se opportuno
//   - Inizilizzare variabili sconti
const discountU18 = ticketPrice * 0.2;
const discountO65 = ticketPrice * 0.4;


//   - Verificare se l'età del utente rientra nei parametri degli sconti
if (userAge < 18) {
    ticketPrice = ticketPrice - discountU18
    console.log(discountU18);
} else if (userAge >= 65) {
    ticketPrice = ticketPrice - discountO65
    console.log(discountO65);
}
console.log(ticketPrice);

//   - Transformare il prezzo in una cifra con max due decimali
// ticketPriceFinal = Math.floor(ticketPrice * 100) / 100;
ticketPriceFinal = ticketPrice.toFixed(2);
console.log(ticketPriceFinal);

// - Mostrare all'utente il prezzo finale
//   - Creare elemento di testo nel file html
//   - Richiamare tale elemento per id
const finalPrice = document.getElementById('final_price');

//   - Modificare l'elemento con la variabile del prezzo finale 
finalPrice.innerHTML = ticketPriceFinal;