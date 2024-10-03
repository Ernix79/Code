let texte = "J'apprends le JAVASCRIPT";
let textesale = "            J'apprends le JAVASCRIPT                  ";

// Majuscule et minuscule
let texteMin = texte.toLowerCase();
let texteMaj = texte.toUpperCase();

alert("Texte de base : " + texte +
      "\nTexte en minuscule : " + texteMin +
      "\nTexte en majuscule : " + texteMaj);


// Pour donner une position d'une lettre dans une chaine de charactère
let pos0 = texte.charAt(0);
let pos3 = texte.charAt(3);
let pos11 = texte.charAt(11);

alert("Position 0 : " + pos0 +
      "\nPosition 3 : " + pos3 +
      "\nPostition 11 : " + pos11);


// Index & lastIndex qui serve a rechercher un une caractère specifique pour ensuite donner ca position
let première = texte.indexOf("J", 1);
let derniere = texte.lastIndexOf("p");
let sequence = texte.indexOf("le");

alert("Premier 'J' trouvé en position : " + première +
      "\nDernier 'p' trouvé en position : " + derniere +
      "\nPremier 'le' trouvé en position : " + sequence);


// Pour remplacer des charactère dans une chaine de charactère
alert(texte.replace("JAVASCRIPT", "PHP"));


// Ceci sert a prendre une partie d'une valeur pour la stocke dans une autre ^let^
alert(texte.slice(0, 10));


// Serve a nettoyer le texte des espace inutile au début et a la fin
let texteNettoye = textesale.trim();
alert("Avant trim : " + textesale +
      "\nAprès trim : " + texteNettoye);