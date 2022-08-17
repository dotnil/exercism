// https://exercism.org/tracks/javascript/exercises/elyses-transformative-enchantments/solutions/dotnil

export const seeingDouble = deck => deck.map(value => value * 2)

export function threeOfEachThree(deck) {
  return deck.flatMap(card => {
    if (card === 3) { return [3, 3, 3] }
 
    return card
  })
}

export function middleTwo(deck) {
  const middle = Math.floor(deck.length / 2)
 
  return deck.slice(middle - 1, middle + 1)
}

export function sandwichTrick(deck) {
  const len = deck.length - 1
  const half = Math.floor(len / 2)

  return deck.map((_item, index) => {
    if (index < half) { return deck[index + 1] }
    if (index === half) { return deck[len] }
    if (index === half + 1) { return deck[0] }
    if (index > half) { return deck[index - 1]  }
  })
}

export const twoIsSpecial = deck => deck.filter(card => card === 2)

export const perfectlyOrdered = deck => [...deck].sort((a, b) => a - b)

export const reorder = deck => deck.reverse()
