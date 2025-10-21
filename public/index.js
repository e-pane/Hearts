import { createDeck, shuffleDeck, deal } from "./helpers.js";

let deck = createDeck();
deck = shuffleDeck(deck);

let players = [
  { id: 1, name: "Alice", hand: [], score: 0 },
  { id: 2, name: "Bob", hand: [], score: 0 },
  { id: 3, name: "Charlie", hand: [], score: 0 },
  { id: 4, name: "Diane", hand: [], score: 0 },
];

// event listener (attached only for Player 1)
document.getElementById("deal-btn").addEventListener("click", () => {
  deck = createDeck();
  shuffleDeck(deck);
  const hands = deal(deck, 4, 13);

  // assign hands
  players.forEach((player, i) => (player.hand = hands[i]));

  // send dealt hands to all clients via WebSocket
  socket.emit("deal", players);
});

const hands = deal(deck, 4, 13);

console.log(hands);

const cardBack = "1B.svg";