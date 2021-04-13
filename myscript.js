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

// bonus my sort (lascio commentato perchè non funziona)

// var newList = [];
// var sorter = [];
// var h = 0;
// var max;

// do {
//     for (var j = 0; j < listaCognomi; j++) {
//         for (var k = 0; k < listaCognomi; k++) {
//             if (listaCognomi[j][h] > listaCognomi[k][h]) {
//                 sorter[k] = true;
//             } else if (listaCognomi[j][h] < listaCognomi[k][h]) {
//                 sorter[k] = false;
//             } else if ((listaCognomi[j][h] == listaCognomi[k][h]) && (h < listaCognomi[j].length) && (h < listaCognomi[k].length)) {
//                 h++;
//                 k--;
//             } else {
//                 sorter[k] = true;
//                 h = 0;
//             }
//         }
//         k = 0;
//         do {
//             max = sorter[k];
//             k++;
//         } while ((max == true) && (k < listaCognomi));
//         if (max == true || listaCognomi.length == 1) {
//             newList.push(listaCognomi[j]);
//             listaCognomi.splice(j, 1);
//             break;
//         }
//     }
// } while (listaCognomi.length > 0)

// for (var i = 0; i < newList.length; i++) {
//     document.getElementById("myId").innerHTML += "<li>" + newList[i] + "</li>";
// }

// document.getElementById("myNum").innerHTML += newList.indexOf(newCognome) + 1;