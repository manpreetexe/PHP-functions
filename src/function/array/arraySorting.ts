/**
 * Sorts an array in ascending order.
 * 
 * @param array - The array to be sorted.
 * @returns A new sorted array.
 */
export function sort<T>(array: T[]): T[] {
  return array.sort();
}

/**
 * Sorts an associative array in ascending order, according to the values.
 * 
 * @param obj - The object to be sorted.
 * @returns A new object with the same keys, sorted by their values.
 */
export function asort<T>(obj: { [key: string]: T }): { [key: string]: T } {
  const sortedKeys = Object.keys(obj).sort((a, b) => (obj[a] > obj[b] ? 1 : -1));
  const result: { [key: string]: T } = {};
  sortedKeys.forEach(key => result[key] = obj[key]);
  return result;
}

/**
 * Sorts an associative array in descending order, according to the values.
 * 
 * @param obj - The object to be sorted.
 * @returns A new object with the same keys, sorted by their values in descending order.
 */
export function arsort<T>(obj: { [key: string]: T }): { [key: string]: T } {
  const sortedKeys = Object.keys(obj).sort((a, b) => (obj[a] < obj[b] ? 1 : -1));
  const result: { [key: string]: T } = {};
  sortedKeys.forEach(key => result[key] = obj[key]);
  return result;
}

/**
 * Sorts an associative array in ascending order, according to the keys.
 * 
 * @param obj - The object to be sorted.
 * @returns A new object with the same values, sorted by their keys.
 */
export function ksort<T>(obj: { [key: string]: T }): { [key: string]: T } {
  const sortedKeys = Object.keys(obj).sort();
  const result: { [key: string]: T } = {};
  sortedKeys.forEach(key => result[key] = obj[key]);
  return result;
}

/**
 * Sorts an associative array in descending order, according to the keys.
 * 
 * @param obj - The object to be sorted.
 * @returns A new object with the same values, sorted by their keys in descending order.
 */
export function krsort<T>(obj: { [key: string]: T }): { [key: string]: T } {
  const sortedKeys = Object.keys(obj).sort().reverse();
  const result: { [key: string]: T } = {};
  sortedKeys.forEach(key => result[key] = obj[key]);
  return result;
}

/**
 * Sorts an array using a custom comparison function.
 * 
 * @param array - The array to be sorted.
 * @param compareFn - A function that defines the sort order.
 * @returns A new sorted array.
 */
export function usort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return array.sort(compareFn);
}

/**
 * Sorts an associative array using a custom comparison function for its keys.
 * 
 * @param obj - The object to be sorted.
 * @param compareFn - A function that defines the sort order for the keys.
 * @returns A new object with the same values, sorted by their keys.
 */
export function uksort<T>(obj: { [key: string]: T }, compareFn: (a: string, b: string) => number): { [key: string]: T } {
  const sortedKeys = Object.keys(obj).sort(compareFn);
  const result: { [key: string]: T } = {};
  sortedKeys.forEach(key => result[key] = obj[key]);
  return result;
}

/**
 * Sorts an array of strings in natural order.
 * 
 * @param array - The array of strings to be sorted.
 * @returns A new array sorted in natural order.
 */
export function natsort(array: string[]): string[] {
  return array.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

/**
 * Sorts an array of strings in natural order, case insensitive.
 * 
 * @param array - The array of strings to be sorted.
 * @returns A new array sorted in natural order, case insensitive.
 */
export function natcasesort(array: string[]): string[] {
  return array.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}
