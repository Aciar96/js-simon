//1-recupero dal dom gli elementi utili
//2-genero 5 numeri random da inserire nel <div id="random"> 
//mostro sullo schermo per un tempo limitato i numeri dopodiche rendo "none" i numeri 
//chiedo all' utente per 5 volte di inserire i numeri da 1-100
//dico all'utente con un allert quanti numeri ha memorizzato 


//1-recupero dal dom gli elementi utili
const dysplay = document.getElementById('display')
let randomNuber = document.getElementById('random')

//preparo un arrey per contenere i 5 numeri random
let num = []
console.log(num)

//2-genero 5 numeri random da inderire nel <div id="random"> 

//devifinisco i valori min e max
let min = 1; 
let max = 99;

//genero 5 numeri random
for(let i = 0; i < 5 ; i++){
 randomNuber = Math.floor(Math.random() *(max-min)+min);
 console.log(randomNuber)
 //pusho il mio numero random nell arrey 
num.push(randomNuber)
console.log(num)
}

//publico in pagina i 5 numeri random
randomNuber










