(function () {

    // establishes variable
    let gamecounter = 0
    let wincounter = 0

    // button selectors
    document.getElementById("rock").addEventListener("click", function () { game(1, 2, 0) });
    document.getElementById("paper").addEventListener("click", function () { game(0, 1, 2) });
    document.getElementById("scissors").addEventListener("click", function () { game(2, 0, 1) });

    // actual game won/loss/tie logic
    function game(x, y, z) {
        let compchoice = (Math.floor(Math.random() * 3));
        let win = x;
        let loss = y;
        let draw = z;
        gamecounter++;
        if (compchoice === win) { let result = "win"; wingame(result) }
        if (compchoice === loss) { let result = "loss"; losegame(result) }
        if (compchoice === draw) { let result = "tie"; tiegame(result) }
    }

    // function that executes results of a win
    function wingame(outcome = "") {
        wincounter++;
        writegame();
        writewin();
        newgametext(outcome);
        resulttext(outcome);
    }
    // function that executes results of a loss
    function losegame(outcome = "") {
        writegame();
        newgametext(outcome);
        resulttext(outcome);
    }
    // function that executes results of a tie
    function tiegame(outcome = "") {
        writegame();
        newgametext(outcome);
        resulttext(outcome);
    }


    // function writes games played counter to page

    function writegame() { document.getElementById("gamecount").innerText = `${gamecounter}` }

    // function writes wins counter to page

    function writewin() { document.getElementById('wincount').innerText = `${wincounter}` }

    // displays dynamic win/loss/tie result text

    function resulttext(outcome) {
        let changetext = document.getElementById("results");
        if (outcome === "win") {
            changetext.innerText = "Congratulations! You won!"
        }
        else if (outcome === "loss") {
            changetext.innerText = "Sorry, you lost."
        }
        else {
            changetext.innerText = "It's a tie, try again."
        }
    }


    function newgametext(outcome) {
        let newgame = document.getElementById("newgame");
        if (outcome == "win") {
            newgame.innerText = "Congratulations! Click for a rematch.";
        }
        if (outcome == "loss") {
            newgame.innerText = "Sorry, want to try again? Click a button.";
        }
        if (outcome == "tie") {
            newgame.innerText = "A draw? Click for a resolution.";
        }
    }
})()