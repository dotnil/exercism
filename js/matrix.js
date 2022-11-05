// https://exercism.org/tracks/javascript/exercises/matrix/solutions/dotnil

export class Matrix {
  constructor(stringMatrix) {
    this.stringMatrix = stringMatrix
  }

  get rows() {
    const rows = this.stringMatrix.split('\n')
    const rowsWithColumns = rows.map(row => row.split(' ').map(num => Number(num)))

    return rowsWithColumns
  }

  get columns() {
    const columnIndexes = this.rows[0].map((_, ind) => ind)
 
    return columnIndexes.map(ind => this.rows.map(row => row[ind]))
  }
}
