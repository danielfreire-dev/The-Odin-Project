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
window.onload = function () {
  let gameboard = document.querySelector("#gameboard");

  //Ask players for their name
  let namep1 = "Super Player 1";
  let namep2 = "Super Player 2";

  document.getElementById("p1Name").addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      let namep1 = "";
      namep1 = document.querySelector("#player1Name").value;
      //alert(namep1 + " is the one");
      document.getElementById("player1").textContent = namep1;
      document.querySelector("#player1Name").value = "";
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
};
/* window.addEventListener(); */ // add keystrokes and/or mouseclick
/* document.getElementById("player1").textContent = namep1;

document.getElementById("player2").textContent = namep2; */
//};

//Turn Counter
/* function turnCount(turn) {
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
      };
    };
  }; */
