// https://exercism.org/tracks/javascript/exercises/triangle/solutions/dotnil

export class Triangle {
  constructor(...sides) {
    this.sides = sides
  }

  triangleInequality() {
    return this.sides.some(side => {
      const otherSides = this.sides.reduce((sum, side) => sum + side) - side

      return side == 0 || side > otherSides
    })
  }

  uniqueSides() {
    return [...new Set(this.sides)].length
  }

  get isEquilateral() {
    if (this.triangleInequality()) return false

    return this.uniqueSides() === 1
  }

  get isIsosceles() {
    if (this.triangleInequality()) return false

    return this.uniqueSides() <= 2
  }

  get isScalene() {
    if (this.triangleInequality()) return false

    return this.uniqueSides() === 3
  }
}
