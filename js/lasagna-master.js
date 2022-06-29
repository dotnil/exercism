export function cookingStatus(timeLeft) {
  if (timeLeft === 0) return 'Lasagna is done.'
  if (typeof timeLeft === 'number') return 'Not done, please wait.'
  return 'You forgot to set the timer.'
}

export function preparationTime(layers, layerPreparationTime) {
  let numberOfLayers = layers.length

  if (layerPreparationTime === undefined) return numberOfLayers * 2
  return numberOfLayers * layerPreparationTime
}

export function quantities(layerList) {
  const noodlesPerLayer = 50
  const saucePerLayer = 0.2

  const noodles = layerList.filter((item) => item === 'noodles').length * noodlesPerLayer 
  const sauce = layerList.filter((item) => item === 'sauce').length * saucePerLayer

  return { sauce, noodles }
}

export function addSecretIngredient(frendsList, myList) {
  const secretIngredient = frendsList[frendsList.length - 1]
  const newMyList = myList.push(secretIngredient)
}

export function scaleRecipe(recipe, numberOfServings) {
  const portionCoefficient = 0.5
  const clonedRecipe = { ...recipe }
  return Object.fromEntries(
    Object.entries(clonedRecipe).map(([key, value]) => [key, value * portionCoefficient * numberOfServings])
  )
}
