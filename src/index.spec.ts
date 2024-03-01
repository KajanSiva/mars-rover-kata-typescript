import { Planet } from './Planet';
import { ObstacleEncounteredError, Rover } from './Rover';

describe('Rover', () => {
  it('should create a new rover with the given coordinates, direction and planet', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);

    expect(rover).toBeDefined();
    expect(rover.coordinates).toEqual(startingCoordinates);
    expect(rover.direction).toEqual(direction);
  });

  it('should move the rover forward', () => {
    const startingCoordinates = { x: 0, y: 5 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['f']);

    expect(rover.coordinates).toEqual({ x: 0, y: 4 });
  });

  it('should move the rover backward', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['b']);

    expect(rover.coordinates).toEqual({ x: 0, y: 1 });
  });

  it('should turn the rover left', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['l']);

    expect(rover.coordinates).toEqual({ x: 0, y: 0 });
    expect(rover.direction).toEqual('W');
  });

  it('should turn the rover right', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['r']);

    expect(rover.coordinates).toEqual({ x: 0, y: 0 });
    expect(rover.direction).toEqual('E');
  });

  it('should wrap at edges, on the y axis', () => {
    const startingCoordinates = { x: 0, y: 0 };
    const direction = 'N';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['f']);

    expect(rover.coordinates).toEqual({ x: 0, y: 9 });
    expect(rover.direction).toEqual('N');
  });

  it('should wrap at edges, on the x axis', () => {
    const startingCoordinates = { x: 9, y: 4 };
    const direction = 'E';
    const size = { x: 10, y: 10 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['f']);

    expect(rover.coordinates).toEqual({ x: 0, y: 4 });
    expect(rover.direction).toEqual('E');
  });

  it('should process an array of commands', () => {
    const startingCoordinates = { x: 9, y: 4 };
    const direction = 'E';
    const size = { x: 10, y: 20 };
    const planet = new Planet(size, []);

    const rover = new Rover(startingCoordinates, direction, planet);
    rover.processCommands(['f', 'f', 'r', 'b', 'l', 'l', 'f']);

    expect(rover.coordinates).toEqual({ x: 1, y: 2 });
    expect(rover.direction).toEqual('N');
  });

  it('should abort the sequence when encountering an obstacle', () => {
    const startingCoordinates = { x: 9, y: 4 };
    const direction = 'E';
    const size = { x: 10, y: 20 };
    const planet = new Planet(size, [
      {
        location: { x: 1, y: 3 },
      },
    ]);

    const rover = new Rover(startingCoordinates, direction, planet);
    expect(() =>
      rover.processCommands(['f', 'f', 'r', 'b', 'l', 'l', 'f']),
    ).toThrow(ObstacleEncounteredError);

    expect(rover.coordinates).toEqual({ x: 1, y: 4 });
    expect(rover.direction).toEqual('S');
  });
});

describe('Planet', () => {
  it('should create a Planet with a given size and obstacles', () => {
    const size = { x: 10, y: 10 };
    const obstacles = [
      {
        location: { x: 5, y: 5 },
      },
      {
        location: { x: 0, y: 3 },
      },
      {
        location: { x: 8, y: 6 },
      },
    ];

    const planet = new Planet(size, obstacles);

    expect(planet.size).toEqual(size);
    expect(planet.obstacleSet).toEqual(new Set(['5:5', '0:3', '8:6']));
  });
});
