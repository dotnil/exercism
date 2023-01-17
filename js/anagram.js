// https://exercism.org/tracks/javascript/exercises/anagram/solutions/dotnil

export const findAnagrams = (target, candidates) => {
  const anagramSearch = candidates.reduce((acc, value) => {
    if (value === target) return acc
    if (value.length !== target.length) return acc
    if (value.toLowerCase() == target.toLowerCase()) return acc

    const str1 = value.toLowerCase().split('').sort().join('')
    const str2 = target.toLowerCase().split('').sort().join('')

    if (str1 === str2) { acc.push(value) }
    return acc
  }, [])

  return anagramSearch
}
