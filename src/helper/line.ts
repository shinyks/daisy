import { getDegree, getDistance, getPointFromDegree, getPointFromRadian, getRadian } from "../calc";
import { IPoint, Point } from "./point";

export class Line {
  fromValue: Point = new Point();
  toValue: Point = new Point();

  get from(): Point {
    return this.fromValue.clone();
  }

  set from(value: Point) {
    this.fromValue.setPoint(value);
  }

  get to(): Point {
    return this.toValue.clone();
  }

  set to(value: Point) {
    this.toValue.setPoint(value);
  }

  get length(): number {
    return getDistance(this.fromValue, this.toValue);
  }

  set length(value: number) {
    this.toValue = getPointFromRadian(this.fromValue, this.radian, value);
  }

  get radian(): number {
    return getRadian(this.fromValue, this.toValue);
  }

  set radian(value: number) {
    this.toValue = getPointFromRadian(this.fromValue, value, this.length);
  }

  get degree(): number {
    return getDegree(this.fromValue, this.toValue);
  }

  set degree(value: number) {
    this.toValue = getPointFromDegree(this.fromValue, value, this.length);
  }

  constructor(from: Point = Point.default, to: Point = Point.default) {
    this.setPoint(from, to);
  }

  setPoint(from: Point, to: Point): void {
    this.fromValue.setPoint(from);
    this.toValue.setPoint(to);
  }

  setIPoint(from: IPoint, to: IPoint): void {
    this.fromValue.setIPoint(from);
    this.toValue.setIPoint(to);
  }
}
