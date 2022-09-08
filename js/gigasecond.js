// https://exercism.org/tracks/javascript/exercises/gigasecond/solutions/dotnil

export const GIGASECOND = 1e12

export const gigasecond = date => new Date(date.getTime() + GIGASECOND)
