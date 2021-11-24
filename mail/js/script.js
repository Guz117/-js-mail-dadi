/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const inserisciMail = document.getElementById('mail');
const control = document.getElementById('control');
const container = document.querySelector('.container');
const mails = ['giovanni@gmail.com', 'marco@gmail.com', 'luca@gmail.com', 'federico@gmail.com', 'mauro@gmail.com'];
let find = false;

control.addEventListener('click',
  function () {
    container.innerHTML = '';

    for (let i = 0; i < mails.length; i++) {
      const element = mails[i];
      if (inserisciMail.value.toLowerCase() == element.toLowerCase()) {
          find = true;
      } 
  } 
  
    console.log(find);
    if (find) {
        console.log('sei nella lista');
        document.getElementById('presenza').innerHTML = 'Sei nella lista';
    } else {
        console.log('non sei nella lista');
        document.getElementById('presenza').innerHTML = 'Non sei nella lista';
    }

    mail = '';
  });



// const inserisciMail = prompt('Inserisci la tua mail');
// const mails = ['giovanni@gmail.com', 'marco@gmail.com', 'luca@gmail.com', 'federico@gmail.com', 'mauro@gmail.com'];
// let find = false;

// for (let i = 0; i < mails.length; i++) {
//     const element = mails[i];
//     if (inserisciMail.toLowerCase() == element.toLowerCase()) {
//         find = true;
//     } 
// } 

// console.log(find);
// if (find) {
//     console.log('sei nella lista');
// } else {
//     console.log('non sei nella lista')
// }