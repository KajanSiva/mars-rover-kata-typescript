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

  hasObstaclesInCoordinates(coordinates: Coordinates) {
    const obstacleIndex = this.obstacles.findIndex((obstacle) => {
      return (
        obstacle.location.x === coordinates.x &&
        obstacle.location.y === coordinates.y
      );
    });

    return obstacleIndex !== -1;
  }
}
