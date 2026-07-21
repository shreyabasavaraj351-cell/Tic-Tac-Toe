let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("p");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color="green";

            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();

    });

});

const enablebtns = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disablebtns = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congragulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebtns();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
 
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
       
        if (pos1val !="" && pos2val !="" && pos3val !="" ) {
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);

            }

        }
    }
};

const resetgame = () => {
    turnO = true;
    enablebtns();
    msgcont.classList.add("hide");
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

    

