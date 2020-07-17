//getting html elements
function getDOMs() {
    const main = document.getElementById("main");
    const range = document.getElementById("range");
    const limitOutput = document.getElementById("limitOutput");
    const scoreOutput = document.getElementById("scoreOutput");
    const clicks = document.getElementById("clicks");
    const win = document.getElementById("win");
}

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

//stating game
function start() {
    changeLimit();
}

//play game
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