export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''))
}

export function luckyNumber(value) {
  const arrayOfValue = String(value).split('')
  const reference = value
 
  function reverse(arrayOfValue) {
    return arrayOfValue.reverse().join('')
  }
 
  return Number(reverse(arrayOfValue)) === reference
}

export function errorMessage(input) {
  if (!input) return 'Required field'
  if (!Number(input) || Number(input) === 0) return 'Must be a number besides 0'
  return ''
}
