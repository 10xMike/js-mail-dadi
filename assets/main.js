// Chiedi all’utente la sua email
    var mail = prompt("Qual è la tua mail?");

// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo

if (mail == "michele@gmail.com"){
    document.getElementById("email").innerHTML = "Access Granted";
}

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
    var playerdicenumber = Math.floor( Math.random() * 6 ) +1;
    console.log(playerdicenumber);
    document.getElementById("playerdicenumber").innerHTML = "Il risultato del tuo dado è " + playerdicenumber;

    var computerdicenumber = Math.floor( Math.random() * 6) +1;
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