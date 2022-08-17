// https://exercism.org/tracks/javascript/exercises/bird-watcher/solutions/dotnil

export function totalBirdCount(birdsPerDay) {
  let sum = birdsPerDay.reduce(function (a, b) {
    return a + b
  })
  return sum
}

export function birdsInWeek(birdsPerDay, week) {
  const startIndex = (week - 1) * 7
  const weekArray = birdsPerDay.slice(startIndex, startIndex + 7)

  return weekArray.reduce((sum, day) => day + sum)
}

export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.forEach(function (day, index) {
    const isOdd = index % 2 === 0
    if (isOdd) {
      birdsPerDay[index] = day + 1
    }
  })

  return birdsPerDay
}
