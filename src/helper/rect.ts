import { IPoint, ISize, Point, Size } from "..";

export interface IRect extends IPoint, ISize {}

export class Rect {
  private point = new Point();
  private size = new Size();

  static get default(): Rect {
    return new Rect(0, 0, 0, 0);
  }

  get x(): number { return this.point.x; }
  set x(value: number) { this.point.x = value; }
  get y(): number { return this.point.y; }
  set y(value: number) { this.point.y = value; }
  get width(): number { return this.size.width; }
  set width(value: number) { this.size.width = value; }
  get height(): number { return this.size.height; }
  set height(value: number) { this.size.height = value; }

  get top(): number { return this.y; }
  get right(): number { return this.x + this.width; }
  get bottom(): number { return this.y + this.height; }
  get left(): number { return this.x; }

  get centerX(): number { return this.x + this.width / 2; }
  get centerY(): number { return this.y + this.height / 2; }
  get centerPoint(): Point { return new Point(this.centerX, this.centerY); }
  get centerIPoint(): IPoint { return { x: this.centerX, y: this.centerY }; }

  get object(): IRect {
    const { x, y } = this.point;
    const { width, height } = this.size;

    return { x, y, width, height };
  }

  constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
    this.point.fromIPoint({ x, y });
    this.size.fromISize({ width, height });
  }

  fromRect({ x, y, width, height }: Rect): void {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  fromIRect({ x, y, width, height }: IRect): void {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  setPoint({ x, y }: Point): void {
    this.x = x;
    this.y = y;
  }

  setIPoint({ x, y }: IPoint): void {
    this.x = x;
    this.y = y;
  }

  setSize({ width, height }: Size): void {
    this.width = width;
    this.height = height;
  }

  setISize({ width, height }: ISize): void {
    this.width = width;
    this.height = height;
  }

  clone(): Rect {
    const newObject = Rect.default;

    newObject.fromIRect(this.object);

    return newObject;
  }

  test(x: number, y: number): boolean {
    return ((this.left < x && x < this.right) && (this.top < y && y < this.bottom)) ? true : false;
  }

  testPoint({ x, y }: Point): boolean {
    return this.test(x, y);
  }

  testIPoint({ x, y }: IPoint): boolean {
    return this.test(x, y);
  }
}