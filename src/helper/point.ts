import { is } from "..";

export interface IPoint {
  x: number;
  y: number;
}

export class Point {
  private point: IPoint = { x: 0, y: 0 };

  static get default(): Point {
    return new Point(0, 0);
  }

  get x(): number {
    return this.point.x;
  }

  set x(value: number) {
    this.point.x = value;
  }

  get y(): number {
    return this.point.y;
  }

  set y(value: number) {
    this.point.y = value;
  }

  get object(): IPoint {
    return this.point;
  }

  constructor(x: number = 0, y: number = 0) {
    if (is.number(x)) {
      this.x = x;
    }

    if (is.number(y)) {
      this.y = y;
    }
  }

  fromPoint({ x, y }: Point): void {
    this.x = x;
    this.y = y;
  }

  fromIPoint({ x, y }: IPoint): void {
    this.x = x;
    this.y = y;
  }

  clone(): Point {
    const newObject = Point.default;

    newObject.fromIPoint(this.object);

    return newObject;
  }
}
