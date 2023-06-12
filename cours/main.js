//  les differents SELECTEURS
// le queryselector permet de selectionner un element du du dom(document) et pour selectionner un element il faut le mettre en guillemet(""). exple: 
// document.querySelector("h4").style.background = "red";
// on utilise la fonction (const) lorsqu'on sait que l'element ne varie jamais

const lesBalises = document.querySelector("h4");

// console.log(lesBablises);
// lesBablises.style.background = "red";
// il faut tjour declarer ses variables en haut avant de mettre la logique.

// click event
const questionContainer = document.querySelector(".click-event")
// il existe 2 façons pour selection une id c'est soit avec queryselector ou bien getElementById. Exple en dessous. 
const btn1 = document.querySelector("#btn-1"); 
const btn2 = document.getElementById("btn-2");
const response = document.querySelector('p');
// console.log(response);

// il faut tjour loguer sa fonction pour savoir s'il y a une erreur quelque part.

// questionContainer.style.borderRadius = "150px";


questionContainer.addEventListener("click",() => {
    // questionContainer.style.background = "green";
    // questionContainer.style.borderRadius = "150px";
    // questionContainer.style.border = "5px solid yellow";
    // questionContainer.classList.add("question-clicked"); 
    // le toggle se met en place si le parametre n'y ait pas
    questionContainer.classList.toggle("question-clicked"); 

})

btn1.addEventListener("click", () => {    
   response.classList.add("show-response");
    response.style.background = "green";
})
btn2.addEventListener("click", () => {
    response.style.visibility = "visible";
    response.style.background = "red";
})

// les priorités en css sont les suivantes:  nous avons dabord: #id > .class > baliseHTML. Mais la <div> est superieur à tous.


// ******************************

// Mouse Events: tous les evenements qu'on peut avoir sur la souris: c'est le mouvement de la souris "mousemove"
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
})

window.addEventListener('mousedown', () => {
   mousemove.style.transform = "scale(2) translate(-25%,-25%)";
})
window.addEventListener('mouseup', () => {
   mousemove.style.transform = "scale(1) translate(-50%,-50%)";
   mousemove.style.border = "2px solid teal"
})

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(1deg)"
})


// **********************************************
// le keyPress event
const keyPresscontainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// voici une des façon d'ajouter une piste audio sur JS: 
const ring = () => {
    const audio = new Audio(); 
    audio.src ="./Enter.mp3"; 
    audio.play();
}

document.addEventListener('keypress', (e) => {
     key.textContent = e.key;

     if(e.key === "m") {
        keyPresscontainer.style.background = "yellow";
     }else if(e.key === "s") {
        keyPresscontainer.style.background = "blue"; 
     }else {
        keyPresscontainer.style.background = "purple";
     }

     ring();
});


