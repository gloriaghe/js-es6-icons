//funzione per inserire icone
const stampa = document.querySelector("section");


iconJs.forEach((element) => {
    const creatoDivCard = document.createElement("div");
    creatoDivCard.classList.add("card");
    const creatoDivImg = document.createElement("i");
    creatoDivImg.classList.add(element.family,  element.prefix + element.name, "iconSize");
    creatoDivCard.append(creatoDivImg);
    const creatoDivText = document.createElement("span");
    creatoDivText.classList.add("iconText");
    creatoDivText.innerHTML = (element.name).toUpperCase();
    creatoDivCard.append(creatoDivText);
    stampa.append(creatoDivCard);

    // colore icone
    creatoDivImg.style.color = element.color;
});

//icone divise per tipo
animalIcon = [];
vegetableIcon = [];
userIcon = [];

const filtroIcone = iconJs.filter ((tipo) => {
    if (tipo.type === "animal") {
        animalIcon.push(tipo);
    } else if (tipo.type === "vegetable") {
        vegetableIcon.push(tipo);
    } else {
        userIcon.push(tipo);
    }
});
console.log(animalIcon)
console.log(vegetableIcon)
console.log(userIcon)