export const parse = longName => {
  const trimmedName = longName.replace(/['_]/g, '')
  const letters = trimmedName.match(/\b\w/g)

  return letters.join('').toUpperCase()
}
