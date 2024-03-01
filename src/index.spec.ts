import { Planet } from './Planet';
import { Rover } from './Rover';

describe('Rover', () => {
  it('should create a new rover with the given coordinates, direction and planet', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size);

    const rover = new Rover(startingCoordinates, direction, planet);

    expect(rover).toBeDefined();
    expect(rover.coordinates).toEqual(startingCoordinates);
    expect(rover.direction).toEqual(direction);
  });

  it('should move the rover forward', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['f']);

    expect(rover.coordinates).toEqual({ x: 0, y: 1 });
  });

  it('should move the rover backward', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['b']);

    expect(rover.coordinates).toEqual({ x: 0, y: -1 });
  });

  it('should turn the rover left', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['l']);

    expect(rover.coordinates).toEqual({ x: 0, y: 0 });
    expect(rover.direction).toEqual('W');
  });

  it('should turn the rover right', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['r']);

    expect(rover.coordinates).toEqual({ x: 0, y: 0 });
    expect(rover.direction).toEqual('E');
  });
});

describe('Planet', () => {
  it('should create a Planet with a given size', () => {
    const size = { x: 10, y: 10 };

    const planet = new Planet(size);

    expect(planet.size).toEqual(size);
  });
});
