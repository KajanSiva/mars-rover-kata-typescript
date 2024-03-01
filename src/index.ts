type Direction = 'N' | 'E' | 'S' | 'W';
type Coordinates = {
  x: number;
  y: number;
};
type Command = 'f' | 'b';

export class Rover {
  coordinates: Coordinates;
  direction: Direction;

  constructor(startingCoordinates: Coordinates, direction: Direction) {
    this.coordinates = startingCoordinates;
    this.direction = direction;
  }

  processCommands(commands: Command[]) {
    for (let i = 0; i < commands.length; i++) {
      this.#processCommand(commands[i]);
    }
  }

  #processCommand(command: Command) {
    switch (command) {
      case 'f':
        this.#moveForward();
        break;
      case 'b':
        this.#moveBackward();
        break;
      default:
        throw new Error('Invalid command');
    }
  }

  #moveBackward() {
    this.#move(true);
  }

  #moveForward() {
    this.#move(false);
  }

  #move(isMovingBackward: boolean) {
    let xOffset = 0;
    let yOffset = 0;

    switch (this.direction) {
      case 'N':
        yOffset = 1;
        break;
      case 'S':
        yOffset = -1;
        break;
      case 'E':
        xOffset = 1;
        break;
      case 'W':
        xOffset = -1;
        break;
      default:
        throw new Error('Invalid direction');
    }

    if (isMovingBackward) {
      xOffset = xOffset * -1;
      yOffset = yOffset * -1;
    }

    this.coordinates = {
      x: this.coordinates.x + xOffset,
      y: this.coordinates.y + yOffset,
    };
  }
}
