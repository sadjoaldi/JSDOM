//  les differents SELECTEURS
// le queryselector permet de selectionner un element du du dom(document) et pour selectionner un element il faut le mettre en guillemet(""). exple:
// document.querySelector("h4").style.background = "red";
// on utilise la fonction (const) lorsqu'on sait que l'element ne varie jamais

const lesBalises = document.querySelector("h4");

// console.log(lesBablises);
// lesBablises.style.background = "red";
// il faut tjour declarer ses variables en haut avant de mettre la logique.

// click event
const questionContainer = document.querySelector(".click-event");
// il existe 2 façons pour selection une id c'est soit avec queryselector ou bien getElementById. Exple en dessous.
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// console.log(response);

// il faut tjour loguer sa fonction pour savoir s'il y a une erreur quelque part.

// questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  // questionContainer.style.background = "green";
  // questionContainer.style.borderRadius = "150px";
  // questionContainer.style.border = "5px solid yellow";
  // questionContainer.classList.add("question-clicked");
  // le toggle se met en place si le parametre n'y ait pas
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";
});

// les priorités en css sont les suivantes:  nous avons dabord: #id > .class > baliseHTML. Mais la <div> est superieur à tous.

// ******************************

// Mouse Events: tous les evenements qu'on peut avoir sur la souris: c'est le mouvement de la souris "mousemove"
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(1deg)";
});

// **********************************************
// le keyPress event
const keyPresscontainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// voici une des façon d'ajouter une piste audio sur JS:
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "m") {
    keyPresscontainer.style.background = "yellow";
  } else if (e.key === "s") {
    keyPresscontainer.style.background = "blue";
  } else {
    keyPresscontainer.style.background = "purple";
  }

  //  ring();
});

// ***********Scroll event*************
// animation d'une navbarre
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ****Form events*****

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré: ${language}</h4>        
        `;
    // on affiche le contenu des variables
  } else {
    alert("Veuiller accepter les CGV");
  }
});

// NB: pour une checkbox, on a pas besoin de declarer une variable c'est aussi valable pour les boutons.
// pour injecter des balises, il faut utiliser: innerHTML;

// *******Load Event *********
window.addEventListener("load", () => {
  console.log("document chargé !!");
});

// ****Les forEach *******
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(1)";
  });
});

// **** addEventListener vs onclick *******
document.body.onclick = () => {
  // console.log("ferme moi !");
};

// Bubbling: declenche l'evenement à la fin. IL faut noter que de base l'eventliseter est parametré sur bubbling

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1");
  },
  false
);

// pour ensavoir plus visiter le site Go Make Things

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
);

// **** stopPropagation, removeEventListener *****
// pour eviter qu'un evenement ecrase un autre on peut utiliser ce parametre
questionContainer.addEventListener("click", (e) => {
  // alert("ferme moi !!");
  e.stopPropagation();
});
// remove eventlistener permet de retirer un eventlistener

// ****Le BOM : broser object model**********

// console.log(window.innerHeight);permet de voir la taille de la fenetre

// window.open("http://twitter.com", "devweb js", "height=700, width=900");
// pour fermer la fenetre il faut juste utiliser window.close
// les evenement qu'on peut adosser à window
// alert();
// - confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment quitter la page ?");
});

// - Prompt
btn1.addEventListener("click", () => {
  let answer = prompt("veuillez saisir votre numero !");
  questionContainer.innerHTML += "<h3>Correcte" + answer + "</h3>";
});

// setTimeout: permet d'entrer un temps en milliseconde avant le declenchement de la logique.. c'est un compte à rebours.

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML += ` <div class ='box'>
      <h2>Nouvelle boite !</h2>
    </div>
    `;
}, 10000);

// pour retirer un element du dom on fait:
document.body.addEventListener("click", (e) => {
  // e.target.remove(); pour retirer
  // clearInterval(interval);
});

// pour arreter un setinterval, il faut le declarer dans une variable

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://google.com") permet de rediriger vers un autre lien
//  window.onload = () => {
//   location.href = "htpp://twitter.fr"
//  }permet de rediriger aussi vers un lien ou site

// *****setProperty *******
