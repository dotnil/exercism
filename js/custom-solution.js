// https://exercism.org/tracks/javascript/exercises/custom-signs/solutions/dotnil

export const buildSign = (occasion, name) => `Happy ${occasion} ${name}!`

export function buildBirthdaySign(age) {
  const ageLabel = age < 50 ? 'young' : 'mature'
 
  return `Happy Birthday! What a ${ageLabel} fellow you are.`
}

export const graduationFor = (name, year) => `Congratulations ${name}!\nClass of ${year}`

export function costOf(sign, currency) {
  const blankСost = 20
  const symbolСost = 2
  const signСost = (sign.length * symbolСost + blankСost).toFixed(2)

  return `Your sign costs ${signСost} ${currency}.`
}
