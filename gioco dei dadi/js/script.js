/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let generatorUser = (Math.floor((Math.random() * 6) + 1));
let generatorPc = (Math.floor((Math.random() * 6) + 1));

console.log(generatorUser);
console.log(generatorPc);

if (generatorUser > generatorPc) {
    console.log('User Win');
    document.getElementById('winner').innerHTML = 'Utente Win';
} else if (generatorUser < generatorPc) {
    console.log('Pc Win');
    document.getElementById('winner').innerHTML = 'Pc Win';
} else if (generatorUser == generatorPc) {
    console.log('Draw');
    document.getElementById('winner').innerHTML = 'Draw';

document.getElementById('gamer').innerHTML = `Numero Utente= ${generatorUser}<br>
Numero Pc= ${generatorPc}`