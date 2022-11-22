// https://exercism.org/tracks/javascript/exercises/perfect-numbers/solutions/dotnil

const aliquotSum = num => {
  let sum = 0
  for (let i = 1; i < num; i++)
    if (num % i == 0)
      sum += i

  return sum
}

export const classify = num => {
  if (num < 1) throw new Error('Classification is only possible for natural numbers.')

  if (aliquotSum(num) === num) return 'perfect'
  if (aliquotSum(num) > num) return 'abundant'
  return 'deficient'
}
