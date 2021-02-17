// player score
let score = 0;

// clicks counter
let clickCount = 0;

// store cards when selecting cards in game
let selectionCardsId = [];
let selectionCardsFullId = [];
let selectionCardsType = [];

// add 2 to score
function scoreCount() {
    score += 2;
    scoreOutput.innerHTML = score;
    if(score == limit) win.innerHTML = "win!";
}

// add 1 to clicks
function click() {
    clickCount++;
    clicks.innerHTML = clickCount;
}

// selecting a card
function select(type, id) {

    click();
    
    let cardId = idCard(type, id); 

    lockCard(cardId, id);
    selectionCardsId.push(id);
    selectionCardsFullId.push(cardId);
    selectionCardsType.push(type);

    // found card (match)
    if(selectionCardsId.length == 2 && selectionCardsId[0] == selectionCardsId[1]) {
        for(var i in selectionCardsFullId) {
            foundCards(selectionCardsFullId[i]);
        }
        scoreCount();
        clearSelectingCards();

    // not found card
    } else if(selectionCardsId.length == 2) {
        for(var i = 0; i < 2; i++) {
            releaseCard(selectionCardsFullId[i], selectionCardsId[i], selectionCardsType[i]);
        }
        clearSelectingCards();
    }
}

// get full id of a card
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

// lock the selected card
function lockCard(cardId, id) {
    id++;
    document.getElementById(cardId).src = "cards/" + id + ".png";
    document.getElementById(cardId).onclick = "";
}

// release selected card
function releaseCard(cardId, id, type) {
    setTimeout(function() {
        document.getElementById(cardId).src = "cards/0.png";
        document.getElementById(cardId).onclick = function() {
            select(type, id);
        };
    }, 1000);
}

// clear the selected card
function clearSelectingCards() {
    selectionCardsId = [];
    selectionCardsFullId = [];
    selectionCardsType = [];
}

// found card
function foundCards(cardId) {
    document.getElementById(cardId).onclick = "";
    document.getElementById(cardId).style.background = "#a8def0";
}
