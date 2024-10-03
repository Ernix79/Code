let min = Number.MIN_VALUE;
let max = Number.MAX_VALUE;
let infneg = Number.NEGATIVE_INFINITY;
let infpos = Number.POSITIVE_INFINITY;
let notnumber = Number.NaN;

alert("Min : " + min +
      "\nMax : " + max +
      "\nInfini négatif : " + infneg +
      "\nInfini positif : " + infpos +
      "\nPas un nombre : " + notnumber);

// Les variable en ordre
let x = 10;
let a = 10.4571;
let y = 10.5823;
let o = 10.5498;
let t = true;
let f = false;
let d = new Date();
let l = "10.4531";


// Type de valeur number
let g = x.toString();

alert("Type x : " + typeof(x) +
      "\nType g : " + typeof(g));


// toFixe serre a arondire il faut indiquer cb de numbre on veut garder après la virgule
let h = a.toFixed(2);

alert("Valeur de h : " + h +
      "\nType de h : " + typeof(h));


// Il serra a la meme chose que toFixed mais on comment par le début du nombre
let u = y.toPrecision(3);

alert("Valeur de u : " + u +
    "\nType de u : " + typeof(u));


// Les exponetial exposant en gros
let i = o.toExponential(3);

alert("Valeur de i : " + i +
      "\nType de i : " + typeof(i));


// Transform des valeur en nombre
alert("True : " + Number(t) +
      "\nFalse : " + Number(f) +
      "\nDate : " + Number(d));


// serre a mettre en nombre en entier ou en décimal et si il est en "" il ce mettre en valeur number
let int = parseInt(l);
let dec = parseFloat(l);
alert("ParseInt() : " + int + " - " + typeof(int) +
      "\nparseFloat() : " + dec + " - " + typeof(dec));