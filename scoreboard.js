let count = 0
let homescreen = document.getElementById("homescreen-el")
let homescreen2 = document.getElementById("homescreen-el2")

function increment1() {
    count += 1
    homescreen.innerText = count
}


function increment2() {
    count += 2
    homescreen.innerText = count
}


function increment3() {
    count += 3
    homescreen.innerText = count
}

function incrementfor1() {
    count += 1
    homescreen2.innerText = count
}


function incrementfor2() {
    count += 2
    homescreen2.innerText = count
}


function incrementfor3() {
    count += 3
    homescreen2.innerText = count
}

function newgame() {
    count = 0
    homescreen.innerText = count
    homescreen2.innerText = count
}