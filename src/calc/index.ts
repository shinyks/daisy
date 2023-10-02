import { Point, degree, radian } from "..";

/**
 * Get distance between two points
 * @param from Start point
 * @param to End point
 * @returns Distance between two points
 */
export const getDistance = (from: Point, to: Point): number => {
  const x = to.x - from.x;
  const y = to.y - from.y;

  return Math.sqrt(x ** 2 + y ** 2);
};

/**
 * Get new point from angle
 * @param from Origin point
 * @param radian Angle value
 * @param distance Distance from origin point
 * @returns New point
 */
export const getPointFromRadian = (from: Point, radianValue: number, distance: number): Point => {
  const x = from.x + (distance * Math.cos(radianValue));
  const y = from.y + (distance * Math.sin(radianValue));

  return new Point(x, y);
};

/**
 * Get new point from angle
 * @param from Origin point
 * @param degree Angle value
 * @param distance Distance from origin point
 * @returns New point
 */
export const getPointFromDegree = (from: Point, degreeValue: number, distance: number): Point => {
  const radianValue = degree.to.radian(degreeValue);

  return getPointFromRadian(from, radianValue, distance);
};

/**
 * Get angle between two points
 * @param from Origin point
 * @param to Destnation point
 * @returns Angle value
 */
export const getRadian = (from: Point, to: Point): number => {
  return Math.atan2(to.y - from.y, to.x - from.x);
};

/**
 * Get angle between two points
 * @param from Origin point
 * @param to Destnation point
 * @returns Angle value
 */
export const getDegree = (from: Point, to: Point): number => {
  const radianValue = getRadian(from, to);

  return radian.to.degree(radianValue);
};
