import { Point, calc } from "..";

export class Line {
  private from: Point;
  private to: Point;

  get length(): number {
    return calc.getDistance(this.from, this.to);
  }

  get radian(): number {
    return calc.getRadian(this.from, this.to);
  }

  get degree(): number {
    return calc.getDegree(this.from, this.to);
  }

  constructor(from: Point, to: Point) {
    this.from = from;
    this.to = to;
  }
}
