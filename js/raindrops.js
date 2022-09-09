// https://exercism.org/tracks/javascript/exercises/raindrops/solutions/dotnil

const factors = {
  3: 'Pling', 5: 'Plang', 7: 'Plong'
}

const labelByFactor = (number, factor, string) => {
  if (number % factor === 0) { return string }

  return ''
}

export const convert = (number) => {
  const label = Object.entries(factors).reduce(
    (result, [factor, string]) => result + labelByFactor(number, factor, string),
    ''
  )

  return label || String(number)
}
