"use strict";
function rand() {
  return Math.random() < 0.9 ? 2 : 4;
}

let arr_2048 = [];
for (let i = 0; i < 4; i++) {
  let arr = [];
  for (let j = 0; j < 4; j++) {
    arr.push(null);
  }
  arr_2048.push(arr);
}

generateCell();
generateCell();

//table
let table = document.createElement("table");
table.id = "table";
for (let i = 0; i < 4; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    let td = document.createElement("td");
    td.innerHTML = arr_2048[i][j];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);
updateColor();

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  switch (event.which) {
    //top
    case 38:
      topKey();
      generateCell();
      updateColor();
      break;
    //left

    case 37:
      leftKey();
      generateCell();
      updateColor();
      break;

    //right
    case 39:
      rightKey();
      generateCell();
      updateColor();
      break;

    //bottom
    case 40:
      buttomKey();
      generateCell();
      updateColor();
      break;
    default:
      break;
  }
}
function updateColor() {
  let colors = [
    "BlanchedAlmond",
    "BurlyWood",
    "Coral",
    "Chocolate",
    "FireBrick",
    "Red",
    "LemonChiffon",
    "GoldenRod",
    "Khaki",
    "Orange",
    "Gold",
  ];
  table = document.getElementById("table");
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      table.rows[i].cells[j].innerHTML = arr_2048[i][j];

      table.rows[i].cells[j].style["background-color"] =
        arr_2048[i][j] == null
          ? "white"
          : colors[Math.log2(arr_2048[i][j]) - 1];
    }
  }
}

function generateCell() {
  let i, j;
  do {
    i = Math.round(Math.random() * 3);
    j = Math.round(Math.random() * 3);
  } while (arr_2048[i][j] != null);
  arr_2048[i][j] = rand();
}

function rightKey() {
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 3; j++) {
        if (arr_2048[i][j + 1] == null && arr_2048[i][j] != null) {
          arr_2048[i][j + 1] = arr_2048[i][j];
          arr_2048[i][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 3; x++) {
      for (let j = 0; j < 3; j++) {
        if ((arr_2048[i][j + 1] == arr_2048[i][j]) & (arr_2048[i][j] != null)) {
          arr_2048[i][j + 1] *= 2;
          arr_2048[i][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 2; j++) {
        if (arr_2048[i][j + 1] == null && arr_2048[i][j] != null) {
          arr_2048[i][j + 1] = arr_2048[i][j];
          arr_2048[i][j] = null;
        }
      }
    }
  }
}

function leftKey() {
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 3; j > 0; j--) {
        if (arr_2048[i][j - 1] == null && arr_2048[i][j] != null) {
          arr_2048[i][j - 1] = arr_2048[i][j];
          arr_2048[i][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 3; x++) {
      for (let j = 3; j > 0; j--) {
        if ((arr_2048[i][j - 1] == arr_2048[i][j]) & (arr_2048[i][j] != null)) {
          arr_2048[i][j - 1] *= 2;
          arr_2048[i][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 3; j > 0; j--) {
        if (arr_2048[i][j - 1] == null && arr_2048[i][j] != null) {
          arr_2048[i][j - 1] = arr_2048[i][j];
          arr_2048[i][j] = null;
        }
      }
    }
  }
}

function topKey() {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 4; j++) {
        if (arr_2048[i][j] == null && arr_2048[i + 1][j] != null) {
          arr_2048[i][j] = arr_2048[i + 1][j];
          arr_2048[i + 1][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 4; j++) {
        if (
          (arr_2048[i][j] == arr_2048[i + 1][j]) &
          (arr_2048[i + 1][j] != null)
        ) {
          arr_2048[i][j] *= 2;
          arr_2048[i + 1][j] = null;
        }
      }
    }
  }
  for (let i = 1; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      for (let j = 0; j < 4; j++) {
        if (arr_2048[i][j] == null && arr_2048[i + 1][j] != null) {
          arr_2048[i][j] = arr_2048[i + 1][j];
          arr_2048[i + 1][j] = null;
        }
      }
    }
  }
}

function buttomKey() {
  for (let i = 3; i > 0; i--) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 4; j++) {
        if (arr_2048[i - 1][j] == null && arr_2048[i - 1][j] != null) {
          arr_2048[i][j] = arr_2048[i - 1][j];
          arr_2048[i - 1][j] = null;
        }
      }
    }
  }
  for (let i = 3; i > 0; i--) {
    for (let x = 0; x < 2; x++) {
      for (let j = 0; j < 4; j++) {
        if (
          (arr_2048[i][j] == arr_2048[i - 1][j]) &
          (arr_2048[i - 1][j] != null)
        ) {
          arr_2048[i][j] *= 2;
          arr_2048[i - 1][j] = null;
        }
      }
    }
  }
  for (let i = 3; i > 0; i--) {
    for (let x = 0; x < 3; x++) {
      for (let j = 0; j < 4; j++) {
        if (arr_2048[i][j] == null && arr_2048[i - 1][j] != null) {
          arr_2048[i][j] = arr_2048[i - 1][j];
          arr_2048[i - 1][j] = null;
        }
      }
    }
  }
}
