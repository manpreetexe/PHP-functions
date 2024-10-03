/**
 * Picks one or more random keys from an array.
 * 
 * @param array - The array to select from.
 * @param count - The number of random keys to pick (default is 1).
 * @returns An array of random keys.
 */
export function array_rand<T>(array: T[], count: number = 1): number[] {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(item => array.indexOf(item));
}

/**
 * Removes the first element from an array and returns it.
 * 
 * @param array - The array to shift.
 * @returns The removed element, or undefined if the array is empty.
 */
export function array_shift<T>(array: T[]): T | undefined {
  return array.shift();
}

/**
 * Adds one or more elements to the beginning of an array.
 * 
 * @param array - The array to unshift to.
 * @param items - The elements to add.
 * @returns The new length of the array.
 */
export function array_unshift<T>(array: T[], ...items: T[]): number {
  return array.unshift(...items);
}

/**
 * Removes the last element from an array and returns it.
 * 
 * @param array - The array to pop from.
 * @returns The removed element, or undefined if the array is empty.
 */
export function array_pop<T>(array: T[]): T | undefined {
  return array.pop();
}

/**
 * Adds one or more elements to the end of an array.
 * 
 * @param array - The array to push to.
 * @param items - The elements to add.
 * @returns The new length of the array.
 */
export function array_push<T>(array: T[], ...items: T[]): number {
  return array.push(...items);
}

/**
 * Reverses the order of the elements in an array.
 * 
 * @param array - The array to reverse.
 * @returns A new array with the elements in reverse order.
 */
export function array_reverse<T>(array: T[]): T[] {
  return array.slice().reverse();
}

/**
 * Calculates the sum of all elements in a numeric array.
 * 
 * @param array - The array of numbers to sum.
 * @returns The sum of the elements.
 */
export function array_sum(array: number[]): number {
  return array.reduce((acc, val) => acc + val, 0);
}

/**
 * Calculates the product of all elements in a numeric array.
 * 
 * @param array - The array of numbers to multiply.
 * @returns The product of the elements.
 */
export function array_product(array: number[]): number {
  return array.reduce((acc, val) => acc * val, 1);
}

/**
 * Extracts a portion of an array.
 * 
 * @param array - The array to slice.
 * @param start - The index to start slicing from.
 * @param end - The index to stop slicing (optional).
 * @returns A new array containing the sliced portion.
 */
export function array_slice<T>(array: T[], start: number, end?: number): T[] {
  return array.slice(start, end);
}
