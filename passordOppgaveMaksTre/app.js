let confirmButton = document.getElementById("confirmButton");

function checkPassword() {
    let tryCount = 0;
    let confirmTxt = document.getElementById("confirmTxt");
    let passwordCorrect = false;
    let passord = prompt("Lag et passord");

    while (passwordCorrect === false) {
        let confirmation = prompt("Skriv inn passordet ditt");
        tryCount++;

        if (confirmation === passord) {
            passwordCorrect = true;
            confirmTxt.innerHTML = "Riktig Passord!";
        } else if (tryCount === 3 && passwordCorrect === false) {
            confirmTxt.innerHTML = "For mange forsøk!";
            confirmButton.remove();
            break;
        }
    }


}

document.getElementById("confirmButton").onclick = checkPassword;