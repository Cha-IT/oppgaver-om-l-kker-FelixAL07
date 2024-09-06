let knapp = document.querySelector("#knappen");
let printListe = document.querySelector("#liste");

let list = [];

knapp.onclick = function() {
    for (let i = 0; i < 10; i++) {
        list.push(i.toString());
    }
    printListe.innerHTML = list;
};
