let gamecounter = 0
let wincounter = 0
console.log(gamecounter)

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


function wingame(outcome ="") {wincounter++; writegame(); writewin(); newgametext(); resulttext(outcome); console.log(`${wincounter}`) }
function losegame(outcome ="") { }
function tiegame(outcome ="") { }

game(0,2,1)
console.log(`${gamecounter} games`)
console.log(`${wincounter} wins`)


function writegame() {console.log("Write Game")}
function writewin() {console.log("write win")}
function newgametext() {console.log("new game text")}
function resulttext() {console.log("result text")}
