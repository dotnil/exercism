// https://exercism.org/tracks/javascript/exercises/difference-of-squares/solutions/dotnil

export class Squares {
  constructor(num) {
    this.num = num
  }

  iterations() {
    return [...Array(this.num).keys()].map(index => index + 1)
  }

  get sumOfSquares() {
    return this.iterations().reduce((acc, cur) => acc + cur **2, 0)
  }

  get squareOfSum() {
    return this.iterations().reduce((acc, cur) => acc + cur, 0) **2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
