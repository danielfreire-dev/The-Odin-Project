/*
1.Create Gameboard
  1.1 Add players *
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
window.addEventListener("load", () => {
  //window.onload = function () {
    let gameboard = document.querySelector("#gameboard");
    //Ask players for their name
    let namep1 = document.getElementById("player1Name").value;
  let namep2 = document.getElementById("player2Name").value;
  window.addEventListener() // add keystrokes and/or mouseclick
    document.getElementById("player1").textContent = namep1;

    document.getElementById("player2").textContent = namep2;

    //Game Board
    /* function gameboard(namep1, namep2) {
      this.gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      return { player1, player2, gameboard };
    } */
    //Turn Counter
    function turnCount(turn) {
      turn = 0;

      let e,
        squares = document.getElementsByTagName("td");
      for (e in squares) {
        if (squares.hasOwnProperty(e)) {
          squares.onClick = function () {
            if (namep1 == "" || namep2 == "") {
              alert("Introduce players names!");
              turn++;
            }
            while (turn <= 9) {
              if (turn % 2 != 0) {
                squares.innerText = "O";

                turn++;
              } else {
                squares.innerText = "X";
                turn++;
              }
            }
          };
        }
      }
    }
    /* for (turn = 0; turn <= 9; turn++) {
      return turn;
      } */

    /*
    function playerturn(turn) {
      turn = 0
      if turn%2!=0 OR (turn = 0) {
        player1
      } else {
        player2
      }
    } */
    console.log(gameboard("namep1", "namep2"));

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
  };
});
