

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);



if(randomNumber == 1){
  computerMove = 'kamień';
}

else if (randomNumber == 2){
  computerMove = 'nożyce';
}

else if
(randomNumber == 3){
  computerMove = 'papier';
}  


printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
  playerMove = 'papier';
}

if(playerInput == '3'){
  playerMove = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrywasz!!');
}


if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Wygrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrywasz!');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}

if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}

if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}
