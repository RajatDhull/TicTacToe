console.log("Welcome to tic-tac-toe!!!");
let turn = "X";
let bgmusic = new Audio("./utilities/music.mp3");
let turnaudio = new Audio("./utilities/ting.mp3");
let gmoversound = new Audio("./utilities/gameover.mp3");
let turner = document.getElementsByClassName("turn");
let boxes = document.getElementsByClassName("box");
let resbtn = document.getElementsByClassName("resbtn");
// function changeturn(){
//     return turn=="X"?"0":"X";
// }

let changeturn = () => {
  return turn === "X" ? "0" : "X";
};
let reset = () => {
  for (let i = 0; i < 9; i++) {
    boxes[i].innerHTML = "";
  }
};
resbtn[0].addEventListener("click", function () {
  reset();
  turn = "X";
  turner.innerHTML = "X turn";
  document.getElementsByTagName('img')[0].style.width = "0px";
  document.getElementsByTagName('img')[1].style.width = "0px";
});
let checkWin = () => {
  // let boxxes=document.getElementsByClassName('box');
  let locations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  locations.forEach((x) => {
    if (
      boxes[x[0]].innerHTML == boxes[x[1]].innerHTML &&
      boxes[x[2]].innerHTML == boxes[x[1]].innerHTML &&
      boxes[x[0]].innerHTML !== ""
    ) {
      turner[0].innerHTML = boxes[x[0]].innerHTML + " Won!!!";
      document.getElementsByTagName('img')[0].style.width = "200px";
      gmoversound.play();
      setTimeout(reset(), 2000);
    }
  });
};
let matchTie=()=>{
    let flag=0;
    for(let i=0;i<9;i++){
        if(boxes[i].innerHTML!=""){
            flag++;
        }
    }
    if(flag==9){
        turner[0].innerHTML = "Match Tie!!!";
        gmoversound.play();
        document.getElementsByTagName('img')[1].style.width = "200px";
        reset();
    }
}
// let restart=()=>{for(let i=0;i<9;i++){
// bgmusic.play();
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", function () {
    if (element.innerHTML == "") {
      element.innerHTML = turn;
      turn = changeturn();
      turnaudio.play();
      turner[0].innerHTML = turn + " turn";
      checkWin();
      matchTie();
    }
  });
});
// }}
