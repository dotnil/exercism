export const transform = (points) => {
  return Object.keys(points).reduce((letter, score) => {
    const chars = points[score]
    chars.forEach(char => letter[char.toLowerCase()] = Number(score))

    return letter
  }, {})
}
