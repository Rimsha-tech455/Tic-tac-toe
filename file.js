let btn = document.querySelectorAll(".box");
let resetgame = document.querySelector("#reset-game");
let newgamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");

let turno = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const rgame = () => {
  turno = true;
  enableBtn();
   let container = document.querySelector(".msg-container");
  container.classList.add("hide");
}
Array.from(btn).forEach(box => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "o";
      box.style.color = "green"
      turno = false;
    } else {
      box.innerText = "x";
      box.style.color = "white"
      turno = true;
    }
    box.disabled = true;

    checkwinner()
  })
});

let disableBtn = () => {
  for (box of btn) {
    box.disabled = true;
  }
}
let enableBtn = () => {
  for (box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  let container = document.querySelector(".msg-container");
  container.classList.remove("hide");
  msg.innerText = `Congratulations, Winner is ${winner}`;
  disableBtn();
}
const checkwinner = () => {
  for (pattern of winpattern) {
    let pos1val = btn[pattern[0]].innerText;
    let pos2val = btn[pattern[1]].innerText;
    let pos3val = btn[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        
        showWinner(pos1val);
      }
    }
  }
}
newgamebtn.addEventListener ("click" , rgame);
resetgame.addEventListener ("click" , rgame);

