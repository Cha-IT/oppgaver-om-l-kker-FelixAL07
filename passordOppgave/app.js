function checkPassword() {
    let confirmTxt = document.getElementById("confirmTxt");
    let passwordCorrect = false;
    let passord = prompt("Lag et passord");

    while (passwordCorrect === false) {
        let confirmation = prompt("Skriv inn passordet ditt");
        if (confirmation === passord) {
            passwordCorrect = true;
            confirmTxt.innerHTML = "Riktig Passord!";
        }
    }
}

document.getElementById("confirmButton").onclick = checkPassword;
