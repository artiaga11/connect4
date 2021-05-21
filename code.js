/* 

1. Initialize the game
    - board view (markup on the page)
    - board model
    - click handlers for the columns
    - current player tracker
2. Take player input
    - know what color disc is being dropped
    - where is the disc being dropped (which column?)
    - is the column full?
    - drop the disc into the board
3. Game ending conditions
    - tie?
    - win?
        - | \ /
    - Display a game ending message
 */

let boardModel = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

// All Variables
let currentPlayer = 1; // 1 or 2
let playerTurn = document.getElementById("message");
playerTurn.innerHTML = "Player 1 Turn";
let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
let column3 = document.getElementById("column3");
let column4 = document.getElementById("column4");
let column5 = document.getElementById("column5");
let column6 = document.getElementById("column6");
let column7 = document.getElementById("column7");

let row = document.getElementsByClassName("column");
let disc = document.getElementsByClassName("cell");
const modal = document.querySelector("#messageModal");

const columnIsFull = (column) => {
  let columnCountWithDisc = 0;
  for (let row = 0; row < boardModel.length; row++) {
    if (boardModel[row][column] != null) {
      //if the column contents is not null
      columnCountWithDisc++; //add 1 to our columnWith Disc
    }
  }
  if (columnCountWithDisc === boardModel.length) {
    //if the column with disc count matches the boardModel length the column is full
    return true;
  }
  return false;
};

const dropDisc = function (columnEl) {
  // TODO: Insert the correct color disc into the correct
  //       DIV in the DOM and also add the disc in the
  //       correct spot in the board model
  let num = 0;
  if (columnEl.id === "column1") {
    num = 0;
  }
  if (columnEl.id === "column2") {
    num = 1;
  }
  if (columnEl.id === "column3") {
    num = 2;
  }
  if (columnEl.id === "column4") {
    num = 3;
  }
  if (columnEl.id === "column5") {
    num = 4;
  }
  if (columnEl.id === "column6") {
    num = 5;
  }
  if (columnEl.id === "column7") {
    num = 6;
  }
  console.log(columnEl.id);
  let cell = document.createElement("cell");
  cell.className = "cell";
  columnEl.appendChild(cell);
  if (currentPlayer === 1) {
    cell.style.backgroundColor = "red";
    for (i = 5; i >= 0; i--) {
      if (boardModel[i][num] === null) {
        boardModel[i][num] = "red";
        return;
      }
    }
  }
  if (currentPlayer === 2) {
    cell.style.backgroundColor = "black";
    for (i = 5; i >= 0; i--) {
      if (boardModel[i][num] === null) {
        boardModel[i][num] = "black";
        return;
      }
    }
  }
  console.log(boardModel);
};

const togglePlayer = function () {
  // TODO: Toggle currentPlayer variable 1<-->2
  if (currentPlayer === 1) {
    currentPlayer = 2;
    playerTurn.innerHTML = "Player 2 Turn";
  } else {
    currentPlayer = 1;
    playerTurn.innerHTML = "Player 1 Turn";
  }
};

/*
      const isGameOver = function (model) {
      function horizontal(boardModel) {
        for (let rowNum = 0; rowNum < boardModel.length; i++) {
            for (let colNum = 0; colNum < 4; colNum++) {
                if (boardModel[rowNum][colNum] === boardModel[rowNum][colnum + 1] &&
                    boardModel[rowNum][colNum] === boardModel[rowNum][colnum + 2] &&
                    boardModel[rowNum][colNum] === boardModel[rowNum][colnum + 3] &&
                    boardModel[rowNum][colNum] !== 0) {
                    console.log(boardModel[rowNum][colNum])
                    return true
      
                }
            }
      
        }
        return false
      }
      function vertical(boardModel) {
        for (rowNum = 0; rowNum < 4; rowNum++) {
            for (let colNum = 0; colNum < boardModel.length; i++) {
                if (boardModel[colNum][rowNum] === boardModel[colNum][rowNum + 1] &&
                    boardModel[colNum][rowNum] === boardModel[colNum][rowNum + 2] &&
                    boardModel[colNum][rowNum] === boardModel[colNum][rowNum + 3] &&
                    boardModel[colNum][rowNum] !== 0) {
                    console.log(boardModel[colNum][rowNum])
                    return true
                }
            }
        }
        return false
      }
      function diagonalUp(boardModel) {
        for (rowNum = 0; rowNum < boardModel.length; i++) {
            for (colNum = 0; rowNum < boardModel.length; j++) {
                if (boardModel[colNum][rowNum] === boardModel[colNum + 1][rowNum + 1] &&
                    boardModel[colNum][rowNum] === boardModel[colNum + 2][rowNum + 2] &&
                    boardModel[colNum][rowNum] === boardModel[colNum + 3][rowNum + 3] &&
                    boardModel[colNum][rowNum] !== 0) {
                    console.log(boardModel[colNum][rowNum])
                    return true
      
                }
      
            }
        }
        return false
        function diagonalDown(boardModel) {
            for (rowNum = 0; rowNum < boardModel.length; i--) {
                for (colNum = 0; colNum < boardModel.length; j--) {
                    if (boardModel[colNum][rowNum] === boardModel[colNum - 1][rowNum - 1] &&
                        boardModel[colNum][rowNum] === boardModel[colNum - 2][rowNum - 2] &&
                        boardModel[colNum][rowNum] === [colNum - 3][rowNum - 3] &&
                        boardModel[colNum][rowNum] !== 0) {
                        console.log(boardModel[colNum][rowNum])
                    }
      
                }
            }
      */

const displayGameOverMessage = function () {
  // TODO: Display the appropriate game over message
  genericDisplayMessage("Game Over");
};

const displayTurnMessage = (playerNum) => {
  genericDisplayMessage("Player " + playerNum + " Turn");
};

const genericDisplayMessage = (message) => {
  playerTurn.innerHTML = message;
};

const clickHandler = function (eventObj) {
  let selectedColumn = eventObj.currentTarget;
  if (selectedColumn.childElementCount > 5) {
    return;
  }
  const columnId = selectedColumn.id; //get the column id, it will come back as column1 or column2, etc
  const columnNumberAsString = columnId.replace("column", ""); //replace the word column to get the number 1,2,etc (it's still string)
  let columnAsNumber = parseInt(columnNumberAsString); //turn the string into a integer
  columnAsNumber--; //subtract 1 because arrays start at 0 not 1 (so there can be no column 7)
  if (columnIsFull(columnAsNumber)) {
    genericDisplayMessage("Column is Full");
    // TODO: Show a message that the column is full
  } else {
    dropDisc(selectedColumn);
    const winner = isGameOver(boardModel);
    if (winner != "") {
      genericDisplayMessage("The winner is " + winner);
      setTimeout(function () {
        alert("The winner is " + winner), 2;
      });
      window.location = "index.html";
    } else {
      togglePlayer();
    }
  }
};

//functions for isGameOver
function boardRow(board, i) {
  return board[i].join(""); // 'red', 'red', 'red', 'red' = 'redredredred'
}
function boardCol(board, j) {
  return board.map((e) => e[j]).join("");
}
function diagDown(board, i) {
  return board.map((e, j) => e[i - board.length + j] || "").join("");
}
function diagUp(board, i) {
  return board
    .slice(0)
    .reverse()
    .map((e, j) => e[i - board.length + j] || "")
    .join("");
}

const isGameOver = (board) => {
  var i,
    s,
    r = "blackblackblackblack",
    y = "redredredred";
  // rows
  for (i = 0; i < board.length; ++i) {
    s = boardRow(board, i);
    if (s.indexOf(r) !== -1) return "Black";
    if (s.indexOf(y) !== -1) return "Red"; //redblackblackblackblackred
  }
  // cols
  for (i = 0; i < board[0].length; ++i) {
    s = boardCol(board, i);
    if (s.indexOf(r) !== -1) return "Black";
    if (s.indexOf(y) !== -1) return "Red";
  }
  // diagonals
  for (i = 4; i <= board.length + board[0].length - 4; ++i) {
    s = diagDown(board, i);
    if (s.indexOf(r) !== -1) return "Black";
    if (s.indexOf(y) !== -1) return "Red";
    s = diagUp(board, i);
    if (s.indexOf(r) !== -1) return "Black";
    if (s.indexOf(y) !== -1) return "Red";
  }
  return "";
};

const initializeGame = function () {
  document.querySelector("#column1").addEventListener("click", clickHandler);
  document.querySelector("#column2").addEventListener("click", clickHandler);
  document.querySelector("#column3").addEventListener("click", clickHandler);
  document.querySelector("#column4").addEventListener("click", clickHandler);
  document.querySelector("#column5").addEventListener("click", clickHandler);
  document.querySelector("#column6").addEventListener("click", clickHandler);
  document.querySelector("#column7").addEventListener("click", clickHandler);
  displayTurnMessage(currentPlayer);
};

document.querySelector("#column1").addEventListener("click", clickHandler);
document.querySelector("#column2").addEventListener("click", clickHandler);
document.querySelector("#column3").addEventListener("click", clickHandler);
document.querySelector("#column4").addEventListener("click", clickHandler);
document.querySelector("#column5").addEventListener("click", clickHandler);
document.querySelector("#column6").addEventListener("click", clickHandler);
document.querySelector("#column7").addEventListener("click", clickHandler);

initializeGame();
