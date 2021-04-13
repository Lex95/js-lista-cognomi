var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var newCognome = prompt("Inserisci il tuo cognome:");

// mette la maiuscola nel caso sia minuscolo
newCognome = newCognome[0].toUpperCase() + newCognome.slice(1);

listaCognomi.push(newCognome);

var newLista = listaCognomi.sort();

for (var i = 0; i < newLista.length; i++) {
    document.getElementById("myId").innerHTML += "<li>" + newLista[i] + "</li>";
}

document.getElementById("myNum").innerHTML += newLista.indexOf(newCognome) + 1;