//funzione per inserire icone
const stampa = document.querySelector("section");


iconJs.forEach((element) => {
    const creatoDivCard = document.createElement("div");
    creatoDivCard.classList.add("card");
    const creatoDivImg = document.createElement("i");
    creatoDivImg.classList.add(element.family,  element.prefix + element.name);
    creatoDivCard.append(creatoDivImg);
    const creatoDivText = document.createElement("span");
    creatoDivText.classList.add("iconText");
    creatoDivText.innerHTML = element.name;
    creatoDivCard.append(creatoDivText);
    stampa.append(creatoDivCard);


});