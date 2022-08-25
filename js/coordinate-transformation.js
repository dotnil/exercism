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
