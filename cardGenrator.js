function displayDeck() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear existing cards
  
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      const cardBox = generateCardBox(card);
      cardsContainer.insertAdjacentHTML('beforeend', cardBox);
    }
  }
  