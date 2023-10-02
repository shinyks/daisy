/**
 * Creates an array of specific numerical ranges.
 * @param start Start value
 * @param count Number of element
 * @param step An integer number specifying the incrementation
 * @returns An array of specific ranges
 */
export const range = (start: number, count: number, step: number = 1): number[] => {
  const list: number[] = [];

  for (let i = 0; i < count; i++) {
    list.push(start + (i * step));
  }

  return list;
};

/**
 * Swap two elements by index.
 * @param array Original array
 * @param index1 Index of first element
 * @param index2 Index of second element
 */
export const swap = (array: any[], index1: any, index2: any): void => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

/**
 * Shuffle items in the list
 * @param list Original list
 * @returns Shuffled list
 */
export const shuffle = <T>(list: T[]): T[] => list.sort(() => Math.random() - 0.5);

/**
 * Add all the values in the list
 * @param numberList Array
 * @returns Sum of all values
 */
export const sum = (numberList: number[]): number => numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/**
 * Get the smallest value in the list
 * @param numberList Array
 * @returns Smallest value
 */
export const min = (numberList: number[]): number => numberList.reduce((a, b) => Math.min(a, b));

/**
 * Get the largest value in the list
 * @param numberList Array
 * @returns Largest value
 */
export const max = (numberList: number[]): number => numberList.reduce((a, b) => Math.max(a, b));
