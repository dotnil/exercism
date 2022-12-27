// https://exercism.org/tracks/javascript/exercises/high-scores/solutions/dotnil

export class HighScores {
  constructor(set) {
    this.set = set
  }

  get scores() {
    return this.set
  }

  get latest() {
    const tail =  this.set.length - 1

    return this.set[tail]
  }

  get personalBest() {
    return Math.max(...this.set)
  }

  get personalTopThree() {
    return [...this.set].sort((a, b) => b - a).slice(0, 3)
  }
}
