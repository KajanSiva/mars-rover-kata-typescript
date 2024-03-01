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
  obstacleSet = new Set();

  constructor(size: Size, obstacles: Obstacle[]) {
    this.size = size;

    obstacles.forEach((obstacle) => {
      const hash = this.#hashCoordinates(obstacle.location);
      this.obstacleSet.add(hash);
    });
  }

  #hashCoordinates(coordinates: Coordinates) {
    return `${coordinates.x}:${coordinates.y}`;
  }

  hasObstaclesInCoordinates(coordinates: Coordinates) {
    const hash = this.#hashCoordinates(coordinates);
    return this.obstacleSet.has(hash);
  }
}
