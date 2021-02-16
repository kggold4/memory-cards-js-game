//stating game
function start() {
    getDOMs();
    changeLimit();
}

//getting html elements
function getDOMs() {
    const win = document.getElementById("win");
    const main = document.getElementById("main");
    const range = document.getElementById("range");
    const clicks = document.getElementById("clicks");
    const limitOutput = document.getElementById("limitOutput");
    const scoreOutput = document.getElementById("scoreOutput");
}

// cahnge limit range of the cards
let limit;
function changeLimit() {
    if(range.value % 2 ==0) {
        limitOutput.innerHTML = range.value;
        limit = range.value;
    } else {
        range.value++;
        changeLimit();
    }
}

// play game
function play() {
    score = -2;
    scoreCount();
    clickCount = -1;
    click();
    win.innerHTML = "";
    clear();
    generate();
    panel();
}