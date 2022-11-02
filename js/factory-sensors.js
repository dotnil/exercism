// https://exercism.org/tracks/javascript/exercises/factory-sensors/solutions/dotnil

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`)
    this.temperature = temperature
  }
}

export function checkHumidityLevel(humidityPercentage) {
  const maxHumidity = 70
  const error = new Error('Error. The percentage of humidity is too high')

  if (humidityPercentage >= maxHumidity ) { throw error }
}

export function reportOverheating(temperature) {
  const maxTemperature = 500

  if (temperature === null) { throw new ArgumentError }
  if (temperature > maxTemperature) { throw new OverheatingError(temperature) }
}


export function monitorTheMachine(actions) {
  try {
    actions.check()
  } catch(err) {
    if (err instanceof ArgumentError) { return actions.alertDeadSensor() }
    if (err instanceof OverheatingError && err.temperature > 600) { return actions.shutdown() }
    if (err instanceof OverheatingError) { return actions.alertOverheating() }

    throw err
  }
}
