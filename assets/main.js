// Chiedi all’utente la sua email
var mail = prompt("Qual è la tua mail?"); 
var access = false;

// Controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo
var mailArray = ["ottavio@gmail.com", "giuliano@gmail.com", "franchino@gmail.com", "michele@gmail.com", "manfredi@gmail.com"];

for (var index = 0; index < mailArray.length; index++) {
    if (mail == mailArray[index]) {
        access = true;
    }
}

if (access == true) {
    document.getElementById('email').innerHTML = "La tua mail corrisponde"
} else {
    document.getElementById('email').innerHTML = "La tua mail non corrisponde"

}


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
    var playerdicenumber = Math.floor( Math.random() * 6 ) + 1;
    console.log(playerdicenumber);
    document.getElementById("playerdicenumber").innerHTML = "Il risultato del tuo dado è " + playerdicenumber;

    var computerdicenumber = Math.floor( Math.random() * 6) + 1;
    console.log(computerdicenumber);
    document.getElementById("computerdicenumber").innerHTML = "Il risultato del dado del PC è " + computerdicenumber;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (playerdicenumber > computerdicenumber) {
    console.log("you win")
    document.getElementById("game").innerHTML = "You Win"
  } else if (playerdicenumber == computerdicenumber){
    console.log("it's a draw")
    document.getElementById("game").innerHTML = "It's a Draw"
  } else {
    console.log("you lose")
    document.getElementById("game").innerHTML = "You Lose"
  }

  // aggiungi array mail, esegui ciclo for sull'array mail, + if (mail = elemento nell'array)
  // variabile sentinella (trovato; false; true)
