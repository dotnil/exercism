// https://exercism.org/tracks/javascript/exercises/etl/solutions/dotnil

export const transform = (point) => {
  return Object.keys(point).reduce((ret, score) => {
    const chars = point[score]
    chars.forEach(char => ret[char.toLowerCase()] = Number(score))

    return ret
  }, {})
}
