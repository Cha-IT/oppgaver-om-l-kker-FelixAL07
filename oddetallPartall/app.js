let numberPrint = document.getElementById("numberPrint")
let partallBtn = document.getElementById("partallKnapp")
let oddetallBtn = document.getElementById("oddetallKnapp")
let tallGrid = [];

for (let i = 1; i <= 100; i++) {
    tallGrid.push(i);
}

const oddetall = tallGrid.filter(number => {
    return number % 2 !== 0;
});

const partall = tallGrid.filter(number => {
    return number % 2 === 0;
});

function printOddetall() {
    numberPrint.innerHTML = oddetall
}

function printPartall() {
    numberPrint.innerHTML = partall
}

partallBtn.onclick = printPartall
oddetallBtn.onclick = printOddetall
