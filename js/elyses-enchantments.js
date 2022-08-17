// https://exercism.org/tracks/javascript/exercises/elyses-enchantments/solutions/dotnil

export function getItem(cards, position) {
  return cards[position]
}

export function setItem(cards, position, replacementCard) {
  const updatedCards = cards.splice(position, 1, replacementCard)
  return cards
}

export function insertItemAtTop(cards, newCard) {
  const updatedCards = cards.push(newCard)
  return cards
}

export function removeItem(cards, position) {
  const updatedCards = cards.splice(position, 1)
  return cards
}

export function removeItemFromTop(cards) {
  const updatedCards = cards.pop()
  return cards
}

export function insertItemAtBottom(cards, newCard) {
  const updatedCards = cards.unshift(newCard)
  return cards
}

export function removeItemAtBottom(cards) {
  const updatedCards = cards.shift()
  return cards
}

export function checkSizeOfStack(cards, stackSize) {
  return cards.length == stackSize
}
