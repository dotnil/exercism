// https://exercism.org/tracks/javascript/exercises/coordinate-transformation/solutions/dotnil

export function translate2d(dx, dy) {
  return (x, y) => [x + dx, y + dy]
}

export function scale2d(sx, sy) {
  return (x, y) => [x * sx, y * sy]
}

export function composeTransform(f, g) {
  return (x, y) => {
    const fResult = f(x, y)
    return g(...fResult)
  }
}

export function memoizeTransform(f) {
  let cache
  let cached_y
  let cached_x

  return (x,y) => {
    if (x == cached_x && y == cached_y) { return cache }

    cached_y = y
    cached_x = x
    cache = f(x,y)
    return cache
  }
}
