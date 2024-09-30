// Symbol de condition
let x = 7, y = 14;


// Est égal à (en valeur)
// ==
let egalval = 4 == "4";


// Est différent de (en valeur)
// !=
let diffval = 4 != "4";


// Est égale à (en valeur et en type)
// ===
let egalvaltype = 4 === "4";


// Est différent de (en valeur ou en type)
// !==
let diffvaltype = 4 !== "4";


// Est strictement inférieur à
// <
let vrai = x < y;


// Est inférieur ou égale à
// <=
let faux = 14 <= 7;


// En strictement supérieur à
// >


// Est supérieur ou égale à
// >=

// alert("vrai stocke : " + vrai +
//     "\nfaux stocke : " + faux +
//     "\negaleval stocke : " + egalval +
//     "\negalevaltype stocke : " + egalvaltype +
//     "\ndiffval stocke : " + diffval +
//     "\ndiffvaltype stocke : " + diffvaltype
// );



// Oppérateur logique
let heure = 6

// OU (OR)
// ||
if (heure < 0 || heure > 24) {
}


// ET (AND)
// &&
    if (heure >= 0 && heure < 12) {
        alert("C'est le matin");
    }
    else if (heure === 12) {
        alert("Il est midi pile");
    }
    else if (heure > 12 && heure <= 24) {
        alert("C'est l'après-midi ou le soir");
    }
else{
    alert("L'heure semble valide");
}


// NON
// !



// Les condition IF, IF...else, IF...ELSE IF...ELSE

// SI SINON
// let heure = 9;

// if (heure <= 18 == true){
//     alert("Bonjour");
// }
// else{
//     alert("Bonsoir");
// }

// let heure = 12;

// if (typeof(heure) == "number" == true) {
//     if (heure < 12 == true){
//         alert("Bon matin");
//     }
//     else if (heure == 12 == true){
//         alert("Bon diner");
//     }
//     else if (heure <= 18 == true){
//         alert("Bon après-midi");
//     }
//     else{
//         alert("Bonne soiré");
//     }
// }
// else{
//     alert("Mauvais type de valeur")
// }