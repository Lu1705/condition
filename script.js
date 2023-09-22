"use strict";

// condition

let a=4;
let b=6;
let c=4;

// on va mettre en place trois variables en place a; b ; c 

switch (a) { // on va tester des égalités
    case b: // première égalité testée
        console.log("a est égale à b");
        break; // break sert à mettre une fin à cette condition
    case c:
        console.log("a est égale à c");
         break;
    default: // default sert au cas ou aucune des égalités testées n'est vérifiée
        console.log ("la variable a n'est égale à aucune autre variable");
}

