/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let generatorUser = [];
let generatorPc = [];

generatorUser.push(Math.floor((Math.random() * 6) + 1));
generatorPc.push(Math.floor((Math.random() * 6) + 1));

console.log(generatorUser);
console.log(generatorPc);

if (generatorUser > generatorPc) {
    console.log('User Win')
} else {
    console.log('Pc Win')
}