// https://exercism.org/tracks/javascript/exercises/elyses-analytic-enchantments/solutions/dotnil

export const getCardPosition = (stack, card) => stack.indexOf(card)

export const doesStackIncludeCard = (stack, card) => stack.includes(card)

export function isEachCardEven(stack) {
  return stack.every((num) => num % 2 === 0)
}

export function doesStackIncludeOddCard(stack) {
  return stack.some((num) => num % 2 !== 0)
}

export function getFirstOddCard(stack) {
  return stack.find((num) => num % 2 !== 0)
}

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num) => num % 2 === 0)
}
