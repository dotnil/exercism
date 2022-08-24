// https://exercism.org/tracks/javascript/exercises/vehicle-purchase/solutions/dotnil

export function needsLicense(kind) {
  return ['car', 'truck'].includes(kind)
}

export function chooseVehicle(option1, option2) {
  const option = option1 <= option2 ? option1 : option2

  return `${option} is clearly the better choice.`
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) { return  originalPrice * 0.8 }
  if (age > 10) { return originalPrice * 0.5 }

  return originalPrice * 0.7
}
