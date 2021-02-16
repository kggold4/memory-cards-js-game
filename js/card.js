// cards
let cards = [];
let randomalCards;

// cards counter by limit range
let idCount = 0;

// string variables
let path = "cards/"
let format = ".png";

// card object class
class Card {

    // card constructor
    constructor() {
        if(idCount == limit / 2) idCount = 0;
        this.id = idCount;
        var i = idCount + 1;
        this.img = path + i + format;
        idCount++;
        add(this);
    }
}

// generate cards function
function generate() {
    var n = limit;
    while(n != 0) {
        let card = new Card();
        n--;
    }
    randomalCards = cards.sort(randomal);
}

// ordering cards in random
function randomal() {
    return 0.5 - Math.random();
}

// add card to cards
function add(card) {
    cards.push(card);
}

// clear all cards
function clear() {
    cards = [];
    randomalCards = [];
    idCount = 0;
}
