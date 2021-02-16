//when selecting cards in game
let selectionCardsId = [];
let selectionCardsFullId = [];
let selectionCardsType = [];

function select(type, id) {

    click();
    
    let cardId = idCard(type, id); 

    lockCard(cardId, id);
    selectionCardsId.push(id);
    selectionCardsFullId.push(cardId);
    selectionCardsType.push(type);

    //found
    if(selectionCardsId.length == 2 && selectionCardsId[0] == selectionCardsId[1]) {
        for(var i in selectionCardsFullId) {
            foundCards(selectionCardsFullId[i]);
        }
        scoreCount();
        clearSelectingCards();

    // not found
    } else if(selectionCardsId.length == 2) {
        for(var i = 0; i < 2; i++) {
            releaseCard(selectionCardsFullId[i], selectionCardsId[i], selectionCardsType[i]);
        }
        clearSelectingCards();
    }
}

function idCard(type, id) {
    var mul = 0;

    if(id > 0 && id <= 9) {
        mul = type * 100;
    } else if(id > 9) {
        mul = type * 1000;
    } else {
        mul = type * 10;
    }

    return cardId = mul + (id * 10);
}

//clear the selecting
function clearSelectingCards() {
    selectionCardsId = [];
    selectionCardsFullId = [];
    selectionCardsType = [];
}

function lockCard(cardId, id) {
    id++;
    document.getElementById(cardId).src = "cards/" + id + ".png";
    document.getElementById(cardId).onclick = "";
}

function releaseCard(cardId, id, type) {
    setTimeout(function() {
        document.getElementById(cardId).src = "cards/0.png";
        document.getElementById(cardId).onclick = function() {
            select(type, id);
        };
    }, 1000);
}

function foundCards(cardId) {
    document.getElementById(cardId).onclick = "";
    document.getElementById(cardId).style.background = "#a8def0";
}

//calculate score
let score = 0;
function scoreCount() {
    score += 2;
    scoreOutput.innerHTML = score;
    if(score == limit) win.innerHTML = "win!";
}

let clickCount = 0;
function click() {
    clickCount++;
    clicks.innerHTML = clickCount;
}