// https://exercism.org/tracks/javascript/exercises/word-count/solutions/dotnil

const countWord = (map, word) => {
  return {
    ...map,
    [word] : (map[word] || 0) + 1
  }
}
 
export const countWords = (phrase) => {
  const words = phrase.toLowerCase().split(/[^\w']/)
  const trimmedWords = words
    .map(word => word.replace(/(^'+|'+$)/g, ''))
    .filter(word => word !== '')

  return trimmedWords.reduce(countWord, {})
}
