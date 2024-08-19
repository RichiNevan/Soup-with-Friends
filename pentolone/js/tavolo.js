const pot = document.getElementById("pentola");
const makeTable = document.getElementById("makeTable");
const soup = document.getElementById("soup");
soup.disabled = true;
const wine = document.getElementById("wine");
wine.disabled = true;
const friends = document.getElementById("friends");
const piatti = document.getElementsByClassName("piatto");
const bicchieri = document.getElementsByClassName("bicchiere");
const amici = document.querySelectorAll(".amico");
const dance = document.getElementById("dance");
dance.disabled = true;
const io = document.getElementById("io");
const amy = document.getElementById("amy");
const jessi = document.getElementById("jessi");
const mona = document.getElementById("mona");
const gpt = document.getElementById("gpt");
const jaco = document.getElementById("jaco");
const einstein = document.getElementById("einstein");
const jonny = document.getElementById("jonny");
const dalai = document.getElementById("dalai")

pot.onclick = function() {
    location.href = "pentolone.html"
};

makeTable.onclick = function() {
   for (let i = 0; i < piatti.length; i++)
    piatti[i].style.visibility = "visible"
   
   for (let b = 0; b < bicchieri.length; b++)
    bicchieri[b].style.visibility = "visible"

   soup.disabled = false;
   wine.disabled = false;
};

soup.onclick = function() {
    for (let i = 0; i < piatti.length; i++) {
        piatti[i].classList.add("hotSoup")
    }
};

wine.onclick = function() {
    for (let i = 0; i < bicchieri.length; i++)
        bicchieri[i].classList.add("fullGlass")
};

dance.onclick = function() {
    for(let i = 0; i < amici.length; i++) {
        console.log(amici[i].className);
        amici[i].classList.replace("amico", "dancing");
    }
    gpt.classList.replace("gpt", "dancing")
}

friends.onclick = function() {
    dalai.classList.add("arrivedDalai");
    io.classList.add("arrivedIo");
    jessi.classList.add("arrivedIo");
    amy.classList.add("arrivedAmy");
    gpt.classList.add("arrivedGPT");
    einstein.classList.add("arrivedEinstein");
    jonny.classList.add("arrivedJonny");
    mona.classList.add("arrivedMona");
    jaco.classList.add("arrivedJaco");
    
    setTimeout(function() {
        dance.disabled = false;
    }, 7000)
};

