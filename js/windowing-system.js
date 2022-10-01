export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(size) {
    const minWidth = Math.max(1, size.width)
    const minHeight = Math.max(1, size.height)

    this.size.width = Math.min(this.screenSize.width - this.position.x, minWidth)
    this.size.height = Math.min(this.screenSize.height - this.position.y, minHeight)
  }

  move(position) {
    const minX = Math.max(0, position.x)
    const minY = Math.max(0, position.y)

    this.position.x = (this.size.width + minX > this.screenSize.width) ? (this.screenSize.width - this.size.width) : minX

    this.position.y = (this.size.height + minY > this.screenSize.height) ? (this.screenSize.height - this.size.height) : minY
  }
}

export function changeWindow (programWindow) {
  const newSize = new Size(400, 300)
  programWindow.resize(newSize)

  const newPosition = new Position(100, 150)
  programWindow.move(newPosition)

  return programWindow
}
