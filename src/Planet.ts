import { Coordinates } from './Rover';

type Size = {
  x: number;
  y: number;
};

type Obstacle = {
  location: Coordinates;
};

export class Planet {
  size: Size;
  obstacles: Obstacle[];

  constructor(size: Size, obstacles: Obstacle[]) {
    this.size = size;
    this.obstacles = obstacles;
  }
}
