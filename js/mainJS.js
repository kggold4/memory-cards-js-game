// stating game
function start() {
    getDOMs();
    changeLimit();
}

// getting html elements
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

// display the cards on main
function panel() {
    let output = "";
    let temp = [];
    for(var i in randomalCards) {
        let type = 8;
        let is = false;
        for(var j in temp) {
            if(temp[j] == randomalCards[i].id) {
                is = true;
                break;
            }
        }
        if(!is) {
            type = 8;
        } else {
            type = 9;
        }
        
        temp.push(randomalCards[i].id);
        output += "<img id='" + type + (randomalCards[i].id * 10) + "' onclick='select(" + type + "," + randomalCards[i].id + ");' src='cards/0.png'>";
    }
    main.innerHTML = output;
}
