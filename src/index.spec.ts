import { Rover } from './index';

describe('Rover', () => {
  it('should create a new rover with the given coordinates and direction', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';

    const rover = new Rover(startingCoordinates, direction);

    expect(rover).toBeDefined();
    expect(rover.coordinates).toEqual(startingCoordinates);
    expect(rover.direction).toEqual(direction);
  });

  it('should move the rover forward', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';

    const rover = new Rover(startingCoordinates, direction);
    rover.processCommands(['f']);

    expect(rover.coordinates).toEqual({ x: 0, y: 1 });
  });

  it('should move the rover backward', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';

    const rover = new Rover(startingCoordinates, direction);
    rover.processCommands(['b']);

    expect(rover.coordinates).toEqual({ x: 0, y: -1 });
  });
});
