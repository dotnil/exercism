// https://exercism.org/tracks/javascript/exercises/hamming/solutions/dotnil

const incOnMismatch = (mistakes, char, otherChar) => {
  if (char != otherChar) return mistakes + 1

  return mistakes
}

export const compute = (strand1, strand2) => {
  if(strand1.length !== strand2.length) throw new Error('strands must be of equal length')

  const chars1 = strand1.split('').map((char) => char)
  return chars1.reduce((mistakes, char, ind) => {
    const otherChar = strand2[ind]

    return incOnMismatch(mistakes, char, otherChar)
  }, 0)
}
