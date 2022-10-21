// https://exercism.org/tracks/javascript/exercises/pangram/solutions/dotnil

export const isPangram = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const lowercaseLetters  = string.toLowerCase()
  const searchElement = function(currentValue){
    return lowercaseLetters.indexOf(currentValue) !== -1
  }

  return alphabet.every(searchElement)
}
