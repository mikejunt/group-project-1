// establishes variable
let gamecounter = 0
let wincounter = 0

// button selectors
document.getElementById("rock").addEventListener("click", function () { game(1, 2, 0) });
document.getElementById("paper").addEventListener("click", function () { game(0, 1, 2) });
document.getElementById("scissors").addEventListener("click", function () { game(2, 0, 1) });

console.log(gamecounter)

// actual game won/loss/tie logic
function game(x, y, z) {
    let compchoice = (Math.floor(Math.random() * 3));
    console.log(`Computer chose ${compchoice}.`)
    let win = x;
    let loss = y;
    let draw = z;
    gamecounter++;
    if (compchoice === win) { let result = "win"; wingame(result) }
    if (compchoice === loss) { let result = "loss"; losegame(result) }
    if (compchoice === draw) { let result = "tie"; tiegame(result) }
}

// function that executes results of a win
function wingame(outcome = "") { wincounter++; writegame(); writewin(); newgametext(); resulttext(outcome); console.log("win") }
// function that executes results of a loss
function losegame(outcome = "") { writegame(); newgametext(); resulttext(outcome); console.log("loss") }
// function that executes results of a tie
function tiegame(outcome = "") { writegame(); newgametext(); resulttext(outcome); console.log("draw") }


// function writes games played counter to page

function writegame() { document.getElementById("gamecount").innerText = `${gamecounter}` }

// function writes wins counter to page

function writewin() { document.getElementById('wincount').innerText = `${wincounter}` }

// displays click to play again text

// function newgametext() { document.getElementById(`newgame`).innerText = `${newgame}` }

// { console.log("new game text") }

// displays dynamic win/loss/tie result text

function resulttext(outcome) {
    let changetext = document.getElementById("results");
    if (outcome == "win") {
        console.log("WIN")
        changetext.innerText = "Congratulations! You won!"
    }
    else if (outcome == "loss") {
        console.log("LOSS")
        changetext.innerText == "Sorry, you lost."
    }
    else {
        console.log("DRAW")
        changetext.innerText == "It's a tie, try again."
    }
}


function newgametext(outcome) {
    let newgame = document.getElementById("newgame")
    if (outcome == "win") {
        newgame.innerText = "Click here to play again!"
    }
    if (outcome == "loss") {
        newgame.innerText = "Click here to play again!"
    }
    if (outcome == "tie") {
        newgame.innerText = "Click here to play again!"
    }

}
