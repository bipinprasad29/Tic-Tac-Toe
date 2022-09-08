let box = document.getElementsByClassName("box");
let winArr=[];
let turn = "X";
const changeTurn = () => turn === "X" ? "O" : "X"
let noOfturn =0
let w = document.getElementById("winner");
let winmsg = document.getElementById("winner");

// winning condition for plyers 
const CheckWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (
      boxtexts[a].innerHTML &&
      boxtexts[a].innerHTML === boxtexts[b].innerHTML &&
      boxtexts[a].innerHTML === boxtexts[c].innerHTML
    ) {
      winArr.push('true');
     
      w.style.display = "block";
      boxtexts[a].style.color =
        boxtexts[c].style.color =
        boxtexts[b].style.color =
          "rgb(255, 255, 255)";
      w.style.color ="#fff";
      w.innerHTML = boxtexts[a].innerHTML + " " + w.innerHTML;
    }
  }
};

// checking for draw
const checDraw =()=>{
  if(noOfturn >= 9 && winArr.length <1){
    w.style.display = "block";
    w.style.color ="#2b3259";
    w.innerHTML = 'its a Draw';
  }
}

Array.from(box).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if(winArr.length<1)
    {
      if (boxtext.innerText === "") {
        noOfturn++
      boxtext.innerText = turn;
      turn = changeTurn();
      document.getElementById("player").innerText = turn + "-turn";
      CheckWin();
      checDraw()
    }}
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    element.style.color = "black";
    winArr=[]
    turn = "X";
    document.getElementById("player").innerText = "X-turn";
    let wi = document.getElementById("winner");
    wi.style.display = "none";
    wi.innerText = "is the winner";
    noOfturn= 0;
  });
});
