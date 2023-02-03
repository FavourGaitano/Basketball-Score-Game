let countEl=document.getElementById("countHome-el")
let countHome=0

function increment1(){
    countHome +=1
    countEl.textContent = countHome 
}
function increment2(){
    countHome +=2
    countEl.textContent = countHome
}

function increment3(){
    countHome +=3
    countEl.textContent = countHome
}
let guestEl=document.getElementById("countGuest-el")
let countGuest =0

function count1(){
    countGuest +=1
    guestEl.textContent = countGuest
}
function count2(){
    countGuest +=2
    guestEl.textContent = countGuest
}
function count3(){
    countGuest +=3
    guestEl.textContent = countGuest
}