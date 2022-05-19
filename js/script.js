//funzione per inserire icone

const stampa = document.querySelector("section");
function creaCard(element) {

    const creatoDivCard = document.createElement("div");
    creatoDivCard.classList.add("card");
    const creatoDivImg = document.createElement("i");
    creatoDivImg.classList.add(element.family, element.prefix + element.name, "iconSize");
    creatoDivCard.append(creatoDivImg);
    const creatoDivText = document.createElement("span");
    creatoDivText.classList.add("iconText");
    creatoDivText.innerHTML = (element.name).toUpperCase();
    creatoDivCard.append(creatoDivText);
    stampa.append(creatoDivCard);


    // colore icone
    creatoDivImg.style.color = element.color;
};

iconJs.forEach((element) => creaCard(element));

animalIcon = [];
vegetableIcon = [];
userIcon = [];

const filtroIcone = iconJs.filter((tipo) => {
    if (tipo.type === "animal") {

        animalIcon.push(tipo);
    } else if (tipo.type === "vegetable") {
        vegetableIcon.push(tipo);
    } else {
        userIcon.push(tipo);
    }
});

console.log(animalIcon);
console.log(vegetableIcon);
console.log(userIcon);

const button = document.querySelector('button');
const inputUser = document.querySelector('input');

button.addEventListener('click', function () {

    stampa.innerHTML = "";
    if (inputUser.value === "animal") {
        iconJs.forEach((element) => {
            if (element.type.includes("animal")) {
                creaCard(element)
            }

        })
    } else if (inputUser.value === "vegetable"){
        iconJs.forEach((element) => {
            if (element.type.includes("vegetable")) {
                creaCard(element)
            }
        })
    } else if(inputUser.value === "user"){
        iconJs.forEach((element) => {
            if (element.type.includes("user")) {
                creaCard(element)
            }

        })
    } else {
        iconJs.forEach((element) => creaCard(element));

    }
});
