import { number as isNumber } from "../is";

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
    const { x, y } = this.point;

    return { x, y };
  }

  constructor(x: number = 0, y: number = 0) {
    if (isNumber(x)) {
      this.x = x;
    }

    if (isNumber(y)) {
      this.y = y;
    }
  }

  setPoint({ x, y }: Point): void {
    this.x = x;
    this.y = y;
  }

  setIPoint({ x, y }: IPoint): void {
    this.x = x;
    this.y = y;
  }

  clone(): Point {
    const newObject = Point.default;

    newObject.setIPoint(this.object);

    return newObject;
  }
}
