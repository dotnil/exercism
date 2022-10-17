// https://exercism.org/tracks/javascript/exercises/resistor-color-duo/solutions/dotnil

const colorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export const decodedValue = colors => {
  const firstTwoColors = colors.slice(0, 2)
  const resistanceString = firstTwoColors.map(color => colorValues[color]).join('')

  return Number(resistanceString)
}
