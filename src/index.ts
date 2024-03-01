type Direction = 'N' | 'E' | 'S' | 'W';
type Coordinates = {
  x: number;
  y: number;
};

export class Rover {
  coordinates: Coordinates;
  direction: Direction;

  constructor(startingCoordinates: Coordinates, direction: Direction) {
    this.coordinates = startingCoordinates;
    this.direction = direction;
  }
}
