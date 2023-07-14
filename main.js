var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; 

var hidden;
var deck;
var canHit = true;


window.onload = function(){
    kortLek()
    blandaKort()
}

    function kortLek() {
        const values = ["A","2","3","4","5","6", "7", "8","9","10","J","Q","K"]
        const färg = ["S","H","R","K"]
        deck = []
    for (let i = 0; i < färg.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const kort = {
          suit: färg[i],
          value: values[j]
        };
        deck.push(kort);
      }
    }
  }
  
  function generateCardBox(card) {
    return `<div class="card-box">${card.value}-${card.suit}</div>`;
  }

function blandaKort() {
    for(let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let kort = deck[i];
    deck [i] = deck[j];
    deck[j] = kort;
    }
    console.log(deck)
}