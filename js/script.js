//1-recupero dal dom gli elementi utili
//2-genero 5 numeri random da inserire nel <div id="random"> 
//3-mostro sullo schermo per un tempo limitato i numeri dopodiche rendo "none" i numeri 
//4-chiedo all' utente per 5 volte di inserire i numeri da 1-100
//5-dico all'utente con un allert quanti numeri ha memorizzato 
/////////////funzione///////////
function random(){
    for(let i = 0; i < 5 ; i++){
        random  = Math.floor(Math.random() *(max-min)+min);
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

//2-genero 5 numeri random da inserire nel <div id="random"> 

//devifinisco i valori min e max
let min = 1; 
let max = 99;
//genero 5 numeri random

random(min,max)

//3-mostro sullo schermo per un tempo limitato i numeri dopodiche rendo "none" i numeri 
const timer = setTimeout(random ,10000)
console.log(timer)








