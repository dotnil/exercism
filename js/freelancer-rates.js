const hoursPerDay = 8
const billableDays = 22

export function dayRate(ratePerHour) {
  return ratePerHour * hoursPerDay
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / ratePerHour) / hoursPerDay)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullPriceDays = numDays % billableDays
  const discountedDays = numDays - fullPriceDays
  const fullAmount = dayRate(ratePerHour) * fullPriceDays
  const discountedAmount = dayRate(ratePerHour) * discountedDays * (1 -  discount)
 
  return Math.ceil(fullAmount + discountedAmount)
}
