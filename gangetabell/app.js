let gangetabell = document.getElementById("gangetabell");
let tableHTML = ""; 

for(let i = 1; i <= 10; i++) {
    for(let x = 1; x <= 10; x++) {
        tableHTML += (x * i) + " "; 
    }
    tableHTML += "<br>"; 
}

gangetabell.innerHTML = tableHTML; 