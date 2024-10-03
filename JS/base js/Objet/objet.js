// Primitive
let primitive = "Je suis une valeur primitive";
// let type_prim = typeof(primitive);
let longueur_prim = primitive.length;
let maj_prim = primitive.toUpperCase();

// Objet
// let moi = {
//     prenom : "Pierre",
//     nom : "Giraud",
//     age : 25,

//     identite : fonction(){
//         returne "Prenom : " + this.prenom +
//                "\nNom : " + this.nom +
//                "\nAge : " + this.age;
//     }
// }

// alert(moi.identite());


// Les type de valeur

let chaine = new String("Je suis un objet");
let maj_chaine = chaine.toUpperCase();
// let type_chai = typeof(chaine);

// alert("Type de primitive : " + type_prim +
//       "\nType de chain : " + type_chai);

alert("Longueur de primitive : " + longueur_prim +
      "\nPrimitive en majuscules : " + maj_prim +
      "\nChaine en majuscules : " + maj_chaine);


