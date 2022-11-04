// https://exercism.org/tracks/javascript/exercises/collatz-conjecture/solutions/dotnil

const transform = integer => {
  if (integer <= 0) { throw new Error('Only positive numbers are allowed') }
  if (integer % 2 === 0) return integer / 2

  return integer * 3 + 1
}

export const steps = (integer, counter = 0) => {
  if (integer === 1) { return counter }

  return steps(transform(integer), counter + 1)
}
