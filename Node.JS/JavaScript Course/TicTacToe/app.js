/*
1.Create Gameboard
  1.1 Add players
  1.2 Add board *
2. Start game
3. Play game
  3.1 Check for tie (there are no more moves possible)
  3.2 Check for win
  3.4 Play!
    3.4.1 Ask player for move
      3.4.1.1 Check if Win
    3.4.2 Ask next player for move
4. If tie/win => Identify
  4.1 Declare winner
    4.1.1 Count wins for each player
    4.1.2 Count ties (only show if happened)
  4.2 Propose new match
*/
//Ask players for their name
function player1(namep1) {
  let namep1 = prompt("Player 1:");
  return namep1;
}
function player2(namep2) {
  let namep2 = prompt("Player 2:");
  return namep2;
}
//Game Board
function gameboard(player1, player2) {
  // gameboard = ["", "", "", "", "", "", "", "", ""];
  this.player1 = "Player1";
  this.player2 = "Player2";
  //multidimensional array
  this.gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return { player1, player2, gameboard };
}
//Turn Counter
function turnCount(turn) {
  for (turn = 0; turn <= 9; turn++) {
    return turn;
  }
}

/* function playerturn(turn) {
  turn = 0
  if turn%2!=0 OR (turn = 0) {
    player1
  } else {
    player2
  }
} */
console.log(gameboard("p1", "p2"));

/* function game {

  if //winner
    {
    alert " Congratulations! Winner is $winner"
  } else if (turnCount < 10)
  {
    alert "Game Over! It's a tie."
  } else {
    playGame
  }
}
function nextMove() { }
function checkWin() { } */
