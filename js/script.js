//1-recupero dal dom gli elementi utili
//2-genero 5 numeri random da inserire nel <div id="random"> 
//3-mostro sullo schermo per un tempo limitato i numeri dopodiche rendo "none" i numeri 
//4-chiedo all' utente per 5 volte di inserire i numeri da 1-99
//5-comparo l'userNumber con i numeri presenti in arrey 
//6-dico all'utente con un allert quanti numeri ha memorizzato 
/////////////funzione///////////
function random(min, max) {
    for (let i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * (max - min) + min);
        console.log(random)
        //pusho il mio numero random nell arrey 
        num.push(random)
        console.log(num)
    }
    //publico in pagina i 5 numeri random  ( andrà itegrato con un setTimeout)
    randomNuber.innerText = num;
}
//1-recupero dal dom gli elementi utili
const display = document.getElementById('display')
let randomNuber = document.getElementById('random')

//preparo un arrey per contenere i 5 numeri random
let num = []
console.log(num)

//preparo un arrey per contenere i 5 numeri dell'utente

//2-genero 5 numeri random da inserire nel <div id="random"> 

//devifinisco i valori min e max
const min = 1;
const max = 99;
//genero 5 numeri random

random(min, max)

//3-mostro sullo schermo per un tempo limitato i numeri dopodiche rendo 
const timer = setTimeout(function () {
    randomNuber.innerText = '';
}, 5000)

//4-chiedo all' utente per 5 volte di inserire i numeri da 1-99
//creo una variabile d'appoggio per inserire il risultato 
let result;
let quest

const userNuber = setTimeout(function () {
    for (let i = 0; i <= 4; i++) {
         quest = parseInt(prompt(`inserisci un numero da ${min} a ${max}`))
        console.log(quest[i])
    }
    if (quest === randomNuber) { 
        result = 5
    } else{
         myAlert = alert("Hai indovinato" + result[i] + "numeri")

    }

    

   

}, 5100)










