let user = prompt("Adın nedir ???")


function showTime(){


let myName = document.querySelector("#myName")
myName.innerHTML = `${user}`


 
let zaman= new Date
var gunler=["pazartesi","sali","carsamba","persembe","cuma","cumartesi","pazar"]

let myClock=document.querySelector("#myClock")
myClock.innerHTML= `${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()}:${gunler[3]} `



}

setInterval(() => {
    showTime()
}, 1000);