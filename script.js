
function playGame (playerInput){
  clearMessages();



  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } 

    if(argMoveId == 2){
      return 'papier';
    } 

    if(argMoveId == 3){
      return 'nożyce';
    } 

  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const scrollToBottom = (id) => {
   const element = document.getElementById(id);
   element.scrollTop = element.scrollHeight;
 }

 let computerMove = getMoveName(randomNumber);


 printMessage('Ruch komputera to: ' + computerMove);


 /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */


 console.log('Gracz wpisał: ' + randomNumber);

 let playerMove = getMoveName(playerInput);

 printMessage('Twój ruch to: ' + playerMove);


 function displayResult(argComputerMove, argPlayerMove){
  printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);

  
  if (argComputerMove == "kamień" && argPlayerMove == "papier"){ 
    printMessage('Wygrywasz!') ;
  }

  if (argComputerMove == "papier" && argPlayerMove == "nożyce"){ 
    printMessage('Wygrywasz!') ;
  }

  if (argComputerMove == "nożyce" && argPlayerMove == "papier"){ 
    printMessage('Przegrywasz!') ;
  }

  if (argComputerMove == "kamień" && argPlayerMove == "nożyce"){ 
    printMessage('Przegrywasz!') ;
  }

  if (argComputerMove == "nożyce" && argPlayerMove == "kamień"){ 
    printMessage('Wygrywasz!') ;
  }

  if (argComputerMove == "papier" && argPlayerMove == "kamień"){ 
    printMessage('Przegrywasz!') ;
  }


  if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }

  if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }

}


displayResult(computerMove, playerMove);
}

document.getElementById('papier').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('kamień').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('nożyce').addEventListener('click', function(){
  playGame(3);
});



var count = 10;

var papier = document.getElementById("papier");
var disp = document.getElementById("display");
papier.onclick = function () {
  if (count == 0) return;
  count -= 1;
  disp.innerHTML = count;
  
};

var count = 10;

var kamień = document.getElementById("kamień");
var disp = document.getElementById("display");
kamień.onclick = function () {
  if (count == 0) return;
  count -= 1;
  disp.innerHTML = count;
  
};

var count = 10;

var nożyce = document.getElementById("nożyce");
var disp = document.getElementById("display");
nożyce.onclick = function () {
  if (count == 0) return;
  count -= 1;
  disp.innerHTML = count;

};

