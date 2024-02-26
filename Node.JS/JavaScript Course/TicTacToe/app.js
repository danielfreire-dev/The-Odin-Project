/*
1.Create Gameboard
  1.1 Add players *
  1.2 Add board *
2. Start game *
3. Play game
  3.1 Check for tie (there are no more moves possible)
  3.2 Check for win
  3.4 Play!
    3.4.1 Ask player for move *
      3.4.1.1 Check if Win
    3.4.2 Ask next player for move *
4. If tie/win => Identify
  Create Switch instead of if's
  4.1 Declare winner
    4.1.1 Count wins for each player
    4.1.2 Count ties (only show if happened)
  4.2 Propose new match
*/
window.onload = function () {
  //let gameboard = document.querySelector("#gameboard");

  //Ask players for their name
  let namep1 = "Player 1";
  let namep2 = "Player 2";
  let yourTurn = "Your move, ";
  let mark;
  let gameCell = document.getElementsByClassName("gameCell");
  let i = 1;
  let wins = " Wins";
  let isWon = false;

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
    if (i <= gameCell.length) {
      if (i % 2 == 0) {
        // Player 2 playing
        //alert("You must state your name!");

        //document.getElementById("nextMove").innerHTML = yourTurn + namep1;
        mark = "O";
        //onsole.log("8");
      } else if (i % 2 != 0) {
        // Player 1 playing
        //alert("You must state your name!");
        //document.getElementById("nextMove").innerHTML = yourTurn + namep2;
        mark = "X";
        //;
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
      mark = "";
    }
    if (event.target.innerHTML == "") {
      event.target.innerHTML = mark;
      return;
    } else if (event.target.innerHTML != "") {
      alert("Too late. Someone got here first! 😛");
      cellTaken();
    }
  }

  for (let j = 0; j < gameCell.length; j++) {
    gameCell[j].addEventListener("click", function (event) {
      event.preventDefault();
      isTie(i);
      cellTaken(event);
      gameboard();
      whichPlayer(i);
      isWin(event);

      i++;
    }); //return;;
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
        //console.log("whichRowClass" + a); //working;
        // console.log(".r" + a); working
        rowCell = document.querySelectorAll(rowClass)[b].textContent; //should create NodeList
        //("row"+a) = document.querySelectorAll("whichRowClass"+a)[b].textContent
        // console.log(["whichRowClass" + a]);
        // ["row" + a].push(("whichRow" + a)[b]);
        // console.log(["rowArray" + a]);
        //console.log(map);
        rowArray.push(rowCell);
      }

      gameboardArray.push(rowArray);
    }

    return gameboardArray;
  }

  function isWin(event) {
    event.preventDefault();
    console.log(gameboardArray);
    //rows
    for (let c = 0; c <= 2; c++) {
      //columns
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
          return;
        } /* else {

        } */
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
};
