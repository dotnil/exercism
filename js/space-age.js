export const age = (planet, ageInSeconds) => {
  const earthYear = 31557600
  const planets = {
    mercury:  0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  const planetYear = earthYear * planets[planet]
  const ageOnPlanet = ageInSeconds / planetYear

  return parseFloat(ageOnPlanet.toFixed(2))
}
