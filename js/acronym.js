export const parse = longName => {
  const splitPhrase = longName.toUpperCase().split(' ')

  const abbreviation = splitPhrase.reduce((acc, curr) => {
    const initialLetter = curr[0]

    return acc + initialLetter
  }, '')

  return abbreviation
}
