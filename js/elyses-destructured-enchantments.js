// https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments/solutions/dotnil

export function getFirstCard(deck) {
  return deck[0]
}

export function getSecondCard(deck) {
  const  [ , secondCard] = deck
  return secondCard
}

export function swapTopTwoCards(deck) {
  [deck[0], deck[1]] = [deck[1], deck[0]]
  return deck
}

export function discardTopCard(deck) {
  const [firstCard, ...rest] = deck
  const otherCards = [...rest]

  return [firstCard, otherCards]
}

export function insertFaceCards(deck) {
  const faceCards = ['jack', 'queen', 'king']
  const [firstCard, ...otherСards] = deck
 
  return [firstCard, ...faceCards, ...otherСards]
}
