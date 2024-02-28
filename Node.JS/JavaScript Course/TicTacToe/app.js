/*
1.Create Gameboard
  1.1 Add players *
  1.2 Add board *
2. Start game *
3. Play game *
  3.1 Check for tie (there are no more moves possible) *
  3.2 Check for win *
  3.4 Play! *
    3.4.1 Ask player for move *
      3.4.1.1 Check if Win *
    3.4.2 Ask next player for move *
4. If tie/win => Identify *

  4.1 Declare winner *
    4.1.1 Count wins for each player
    4.1.2 Count ties (only show if happened)
  4.2 Propose new match
*/
window.onload = function () {
  //let gameboard = document.querySelector("#gameboard");

  //Ask players for their name
  let namep1 = "Player 1";
  let namep2 = "Player 2";
  let p1counter = 0;
  let p2counter = 0;
  let yourTurn = "Your move, ";
  let mark;
  let gameCell = document.getElementsByClassName("gameCell");
  let i = 1;
  let wins = " Wins";
  let isWon = false;
  let reset = false;

  document.getElementById("p1Name").addEventListener(
    "click",
    function (event) {
      event.preventDefault();

      namep1 = document.querySelector("#player1Name").value;
      //alert(namep1 + " is the one");
      document.getElementById("player1").textContent = namep1;
      document.querySelector("#player1Name").value = "";
    }
    //false
  );

  //function player1save(namep1) {}
  document.getElementById("p2Name").addEventListener("click", function (event) {
    namep2 = document.getElementById("player2Name").value;
    //alert(namep2 + " is the two");
    document.getElementById("player2").innerHTML = namep2;
    document.querySelector("#player2Name").value = "";
    event.preventDefault();
  });

  document.getElementById("player1").innerHTML = namep1;
  document.getElementById("player2").innerHTML = namep2;
  document.getElementById("nextMove").innerHTML = "Let's go!";
  /*document.getElementById("nextMove").innerHTML = yourTurn + namep1; */

  //Play the Game
  function turn(i) {
    resetFunction();
    if (i <= gameCell.length) {
      if (i % 2 == 0) {
        // Player 2 playing

        mark = "O";
      } else if (i % 2 != 0) {
        // Player 1 playing

        mark = "X";
      }
    } else {
    }
  }
  function whichPlayer(i) {
    if (i < gameCell.length) {
      if (i % 2 == 0) {
        // Player 2 playing
        //alert("You must state your name!");

        document.getElementById("nextMove").innerHTML = yourTurn + namep1;
      } else if (i % 2 != 0) {
        // Player 1 playing

        //alert("You must state your name!");
        document.getElementById("nextMove").innerHTML = yourTurn + namep2;
      }
    } else {
      return;
    }
  }
  function cellTaken(event) {
    turn(i);
    if (isWon == true) {
      //mark = "";
    } else {
      if (event.target.innerHTML == "") {
        event.target.innerHTML = mark;

        return;
      } else if (event.target.innerHTML != "") {
        alert("Too late. Someone got here first! 😛");
        cellTaken();
      }
    }
  }

  for (let j = 0; j < gameCell.length; j++) {
    gameCell[j].addEventListener("click", function (event) {
      event.preventDefault();
      resetFunction();
      isTie(i);
      cellTaken(event);
      gameboard();
      //cellTaken(event);
      whichPlayer(i);
      isWin(event);
      console.log(i);

      i++;
      document.querySelector("#p1counter").textContent = p1counter;
      document.getElementById("p2counter").textContent = p2counter;
    }); //return;;
  }

  function resetFunction() {
    if (reset == true) {
      i = 1;
      //j = 0;
      isWon = false;
      reset = false;
      p1counter = 0;
      p2counter = 0;
    }
  }

  function gameboard() {
    //Create gameboard array
    gameboardArray = [];
    // a is for rows
    for (let a = 0; a <= 2; a++) {
      row = "row" + a; // row0 row1 row2
      rowClass = ".r" + a; // .r0 .r1 .r2
      rowArray = [];
      // b is for the columns
      for (let b = 0; b <= 2; b++) {
        rowCell = document.querySelectorAll(rowClass)[b].textContent; //should create NodeList
        rowArray.push(rowCell);
      }

      gameboardArray.push(rowArray);
    }

    return gameboardArray;
  }

  function isWin(event) {
    event.preventDefault();
    console.log(gameboardArray);
    //for rows
    for (let c = 0; c <= 2; c++) {
      //for columns
      for (let d = 0; d <= 2; d++) {
        //row equal
        if (
          (gameboardArray[c][0] == "X" &&
            gameboardArray[c][1] == "X" &&
            gameboardArray[c][2]) == "X"
        ) {
          document.getElementById("nextMove").textContent = namep1 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p1counter++;
          return;
        } else if (
          (gameboardArray[c][0] == "O" &&
            gameboardArray[c][1] == "O" &&
            gameboardArray[c][2]) == "O"
        ) {
          document.getElementById("nextMove").innerHTML = namep2 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p2counter++;
          return;
        }
        //column equal
        else if (
          (gameboardArray[0][d] == "X" &&
            gameboardArray[1][d] == "X" &&
            gameboardArray[2][d]) == "X"
        ) {
          document.getElementById("nextMove").textContent = namep1 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p1counter++;
          return;
        } else if (
          (gameboardArray[0][d] == "O" &&
            gameboardArray[1][d] == "O" &&
            gameboardArray[2][d]) == "O"
        ) {
          document.getElementById("nextMove").innerHTML = namep2 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p2counter++;
          return;
        }
        //diagonal
        else if (
          (gameboardArray[0][0] == "X" &&
            gameboardArray[1][1] == "X" &&
            gameboardArray[2][2]) == "X"
        ) {
          document.getElementById("nextMove").textContent = namep1 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p1counter++;
          return;
        } else if (
          (gameboardArray[2][0] == "X" &&
            gameboardArray[1][1] == "X" &&
            gameboardArray[0][2]) == "X"
        ) {
          document.getElementById("nextMove").innerHTML = namep1 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p1counter++;
          return;
        } else if (
          (gameboardArray[0][0] == "O" &&
            gameboardArray[1][1] == "O" &&
            gameboardArray[2][2]) == "O"
        ) {
          document.getElementById("nextMove").textContent = namep2 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p2counter++;
          return;
        } else if (
          (gameboardArray[2][0] == "O" &&
            gameboardArray[1][1] == "O" &&
            gameboardArray[0][2]) == "O"
        ) {
          document.getElementById("nextMove").innerHTML = namep2 + wins;
          document.getElementById("nextMove").style.color = "green";
          document.getElementById("nextMove").style.fontWeight = "900";
          isWon = true;
          mark = "";
          p2counter++;
          return;
        }
        return;
      }
    }
  }

  function isTie(i) {
    if (i == 9) {
      document.getElementById("nextMove").innerHTML = "It's a tie!";
      document.getElementById("nextMove").style.color = "orange";
      return;
    } else {
    }
  }
  document.getElementById("reset").addEventListener("click", function (event) {
    let removeCells = document.querySelectorAll(".gameCell");

    for (let e = 0; e < 9; e++) {
      removeCells[e].textContent = "";
    }
    gameboardArray = [];
    document.getElementById("nextMove").innerHTML = "Let's go!";
    document.getElementById("nextMove").style.color = null;
    document.getElementById("nextMove").style.fontWeight = null;
    reset = true;
  });
  document
    .getElementById("nextGame")
    .addEventListener("click", function (event) {
      for (let e = 0; e < 9; e++) {
        removeCells[e].textContent = "";
      }
      gameboardArray = [];
      document.getElementById("nextMove").innerHTML = "Let's go!";
      document.getElementById("nextMove").style.color = null;
      document.getElementById("nextMove").style.fontWeight = null;
      reset = true;
    });
};
