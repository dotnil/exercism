// https://exercism.org/tracks/javascript/exercises/resistor-color/solutions/dotnil

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
export const COLORS = Object.keys(colorValues)

export const colorCode = color => colorValues[color]
