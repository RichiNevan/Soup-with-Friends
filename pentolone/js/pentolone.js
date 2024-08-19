const on = document.getElementById("on");
const off = document.getElementById("off");
off.disabled = true;
const bolle = document.getElementsByClassName("bolla");
const stove = document.getElementById("fire");
const letsEat = document.getElementById("tavola");
letsEat.disabled = true

let isAnimating = false;

function toggleFire() {
    if(isAnimating) {
        stove.classList.remove("animate");
        for (let i = 0; i < bolle.length; i++) {
            bolle[i].style.visibility = "hidden";
        }
    } else {
        stove.classList.add("animate");
        setTimeout(function() {
            for (let i = 0; i < bolle.length; i++) {
                bolle[i].style.visibility = "visible";
        }}, 3000)
    }
    isAnimating = !isAnimating;
}

on.onclick = function() {
        toggleFire();
        off.disabled = false;
        on.disabled = true;
        
        setTimeout(function() {
            letsEat.disabled = false;
        }, 3000)
       
}

off.onclick = function() {
        toggleFire();
        on.disabled = false;
        off.disabled = true;
}


letsEat.onclick = function () {
    location.href = "tavolo.html"
}