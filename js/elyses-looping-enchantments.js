export function cardTypeCheck(stack, card) {
  return stack.filter(cardFromStack => cardFromStack === card).length
}

export function determineOddEvenCards(stack, type) {  
  if (type) { return stack.filter(card => card % 2 === 0).length }

  return stack.filter(card => card % 2 !== 0).length
}
