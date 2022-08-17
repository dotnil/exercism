// https://exercism.org/tracks/javascript/exercises/annalyns-infiltration/solutions/dotnil

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || prisonerIsAwake || archerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  const withDog = !archerIsAwake && petDogIsPresent
  const withoutDog = !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake
  return withDog || withoutDog
}
