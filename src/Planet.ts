type Size = {
  x: number;
  y: number;
};

export class Planet {
  size: Size;

  constructor(size: Size) {
    this.size = size;
  }
}