// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {

  this.width = width
  this.height = height

  Size.prototype.resize = function (width, height) {
    this.width = width
    this.height = height
  }
}

export function Position(x = 0, y = 0) {

  this.x = x
  this.y = y

  Position.prototype.move = function (x, y) {
    this.x = x
    this.y = y
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  // YOU HAVE TO SKETCH THE WINDOWING CONCEPT TO 
  // UNDERSTAND HOW THE FOLLOWING FUNCTIONS WORKS!

  resize(size) {

    if (size.width < 1) size.width = 1
    if (size.height < 1) size.height = 1

    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y

    if (size.width > maxWidth) {
      size.width = maxWidth
    }

    if (size.height > maxHeight) {
      size.height = maxHeight
    }

    this.size = size
  }

  move(pos) {

    if (pos.x < 0) pos.x = 0
    if (pos.y < 0) pos.y = 0

    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height

    if (pos.x > maxX) pos.x = maxX
    if (pos.y > maxY) pos.y = maxY


    this.position = pos
  }

}

export function changeWindow(programWindow) {

  programWindow.size.width = 400
  programWindow.size.height = 300
  programWindow.position.x = 100
  programWindow.position.y = 150

  return programWindow
}

