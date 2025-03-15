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

  document.getElementById("p1Name").addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      /* let namep1 = ""; */
      namep1 = document.querySelector("#player1Name").value;
      //alert(namep1 + " is the one");
      document.getElementById("player1").textContent = namep1;
      namep1 = "";
    },
    false
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
      //isWin();
      isTie(i);
      cellTaken(event);
      whichPlayer(i);
      i++;
      //console.log(i);

      return;
    });
  }

  function isWin() {
    //row equal

    /* let row = []; */
    // a is for rows
    for (let a = 0; a <= 2; a++) {
      this["row" + a] = []; // row0 row1 row2
      // b is for the columns
      for (let b = 0; b <= 2; b++) {
        this["whichRowClass" + a] = ".r" + a; // .r0 .r1 .r2
        // console.log("whichRowClass" + a); working
        // console.log("whichRow" + a); working
        /* ["row" + a] = document.querySelectorAll(["whichRowClass" + a])[
          b
        ].textContent; */ //should create NodeList
        //("row"+a) = document.querySelectorAll("whichRowClass"+a)[b].textContent
        // console.log(["whichRowClass" + a]);
        // ["row" + a].push(("whichRow" + a)[b]);
        // console.log(["rowArray" + a]);
        console.log(map);
      }
    }
    /* funciona {
      let row = [];
    for (let b = 0; b < 3; b++) {
      row[b] = [];
      for (let a = 0; a < 3; a++) {
        let row0 = document.querySelectorAll(".r0")[a].textContent; //should create NodeList
        console.log(row0);
        row[b].push(row0);
        console.log(row[b]);
      }
    }
    } */

    //column equal
    //diagonal
  }

  function isTie(i) {
    if (i == 9) {
      document.getElementById("nextMove").innerHTML = "It's a tie!";
      document.getElementById("nextMove").style.color = "orange";
      return;
    } else {
    }
  }
  function createRowArray(row) {
    for (let row = 0; row <= 2; row++) {
      this["whichRow" + row] = document.querySelectorAll("whichRowClass" + row)[
        row
      ].textContent;
      console.log("whichRow" + row);
    }
  }
};
let gameboard ={
  this.00: document.getElementsByClassName("r0 c0").textContent,
  this.01: document.getElementsByClassName("r0 c1").textContent,
  this.02: document.getElementsByClassName("r0 c2").textContent,
  this.10: document.getElementsByClassName("r1 c0").textContent,
  this.11: document.getElementsByClassName("r1 c1").textContent,
  this.12: document.getElementsByClassName("r1 c2").textContent,
  this.20: document.getElementsByClassName("r2 c0").textContent,
  this.21: document.getElementsByClassName("r2 c1").textContent,
  this.22: document.getElementsByClassName("r2 c2").textContent,
}

console.log(gameboard.00);
