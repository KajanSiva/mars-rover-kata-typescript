import { Planet } from './Planet';

type Direction = 'N' | 'E' | 'S' | 'W';
type Coordinates = {
  x: number;
  y: number;
};
type Command = 'f' | 'b' | 'l' | 'r';

const directions: Direction[] = ['N', 'E', 'S', 'W'];

export class Rover {
  coordinates: Coordinates;
  direction: Direction;
  planet: Planet;

  constructor(
    startingCoordinates: Coordinates,
    direction: Direction,
    planet: Planet,
  ) {
    this.coordinates = startingCoordinates;
    this.direction = direction;
    this.planet = planet;
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
      case 'l':
        this.#turnLeft();
        break;
      case 'r':
        this.#turnRight();
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
        yOffset = -1;
        break;
      case 'S':
        yOffset = 1;
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
      x:
        (this.coordinates.x + xOffset + this.planet.size.x) %
        this.planet.size.x,
      y:
        (this.coordinates.y + yOffset + this.planet.size.y) %
        this.planet.size.y,
    };
  }

  #turnLeft() {
    this.#turn(false);
  }

  #turnRight() {
    this.#turn(true);
  }

  #turn(isClockwise: boolean) {
    const currentDirectionIndex = directions.findIndex((direction) => {
      return this.direction === direction;
    });

    if (currentDirectionIndex === undefined) {
      throw new Error('Current direction is invalid');
    }

    const directionIndexIncrement = isClockwise ? 1 : -1;

    const nextDirectionIndex =
      (currentDirectionIndex + directionIndexIncrement + directions.length) %
      directions.length;

    this.direction = directions[nextDirectionIndex];
  }
}
