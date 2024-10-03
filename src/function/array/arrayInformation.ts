/**
 * Counts the number of elements in an array or object.
 * 
 * @param mixed - The array or object to count.
 * @returns The count of elements.
 */
export function count(mixed: any): number {
  if (Array.isArray(mixed)) {
    return mixed.length;
  }
  if (typeof mixed === 'object' && mixed !== null) {
    return Object.keys(mixed).length;
  }
  return 0;
}

/**
 * Returns the size of an array or object.
 * 
 * @param mixed - The array or object to measure.
 * @returns The size of the array or object.
 */
export function sizeof(mixed: any): number {
  if (Array.isArray(mixed)) {
    return mixed.length;
  }
  if (typeof mixed === 'object' && mixed !== null) {
    return Object.keys(mixed).length;
  }
  return 0;
}

/**
 * Checks if a given key exists in an object.
 * 
 * @param key - The key to check for.
 * @param obj - The object to search in.
 * @returns True if the key exists, false otherwise.
 */
export function array_key_exists<T>(key: string | number, obj: Record<string | number, T>): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Returns the values of an object as an array.
 * 
 * @param arr - The object to extract values from.
 * @returns An array of values.
 */
export function array_values<T>(arr: Record<string, T>): T[] {
  return Object.values(arr);
}

/**
 * Replaces the values of the first array with the values from subsequent arrays.
 * 
 * @param arrays - The arrays to combine.
 * @returns A new object with replaced values.
 */
export function array_replace<T>(...arrays: Array<Record<string, T>>): Record<string, T> {
  return Object.assign({}, ...arrays);
}

/**
 * Removes duplicate values from an array.
 * 
 * @param arr - The array to filter.
 * @returns A new array with unique values.
 */
export function array_unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Filters an array using a callback function.
 * 
 * @param arr - The array to filter.
 * @param callback - The callback function to test each element.
 * @returns A new array with elements that pass the test.
 */
export function array_filter<T>(arr: T[], callback: (value: T, index: number) => boolean): T[] {
  return arr.filter(callback);
}

/**
 * Applies a callback function to each element of an array and returns a new array.
 * 
 * @param callback - The function to apply.
 * @param arr - The array to map.
 * @returns A new array with the results of the callback function.
 */
export function array_map<T, R>(callback: (value: T, index: number) => R, arr: T[]): R[] {
  return arr.map(callback);
}

/**
 * Iteratively reduces an array to a single value using a callback function.
 * 
 * @param arr - The array to reduce.
 * @param callback - The function to apply to each element.
 * @param initialValue - The initial value to start the reduction.
 * @returns The reduced value.
 */
export function array_reduce<T, R>(arr: T[], callback: (accumulator: R, currentValue: T) => R, initialValue: R): R {
  return arr.reduce(callback, initialValue);
}

/**
 * Applies a callback function to each element of an array.
 * 
 * @param arr - The array to walk through.
 * @param callback - The function to apply to each element.
 */
export function array_walk<T>(arr: T[], callback: (value: T, index: number, array: T[]) => void): void {
  arr.forEach(callback);
}

/**
 * Splits an array into chunks of a specified size.
 * 
 * @param arr - The array to split.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 */
export function array_chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Removes a portion of the array and replaces it with new elements.
 * 
 * @param arr - The array to splice.
 * @param start - The index at which to start changing the array.
 * @param deleteCount - The number of elements to remove.
 * @param items - The elements to add.
 * @returns An array of removed elements.
 */
export function array_splice<T>(arr: T[], start: number, deleteCount: number, ...items: T[]): T[] {
  const deletedItems = arr.splice(start, deleteCount, ...items);
  return deletedItems;
}

/**
 * Pads an array to a specified length with a specified value.
 * 
 * @param arr - The array to pad.
 * @param length - The desired length of the array.
 * @param value - The value to pad with.
 * @returns A new padded array.
 */
export function array_pad<T>(arr: T[], length: number, value: T): T[] {
  const paddedArray = arr.slice();
  while (paddedArray.length < length) {
    paddedArray.push(value);
  }
  return paddedArray;
}

/**
 * Flips the keys and values of an object.
 * 
 * @param arr - The object to flip.
 * @returns A new object with keys and values flipped.
 */
export function array_flip<T extends string | number>(arr: Record<string, T>): Record<T, string> {
  const flipped: Record<T, string> = {} as Record<T, string>;
  for (const key in arr) {
    flipped[arr[key]] = key;
  }
  return flipped;
}

/**
 * Returns the values of a specific key from an array of objects.
 * 
 * @param arr - The array of objects to extract from.
 * @param key - The key to extract values for.
 * @returns An array of values for the specified key.
 */
export function array_column<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(item => item[key]);
}

/**
 * Fills an array with a specified value starting at a specified index.
 * 
 * @param startIndex - The index to start filling.
 * @param count - The number of elements to fill.
 * @param value - The value to fill with.
 * @returns An object filled with the specified value.
 */
export function array_fill<T>(startIndex: number, count: number, value: T): Record<number, T> {
  const result: Record<number, T> = {};
  for (let i = 0; i < count; i++) {
    result[startIndex + i] = value;
  }
  return result;
}

/**
 * Creates an object filled with specified keys, each assigned a specific value.
 * 
 * @param keys - The keys to use for the object.
 * @param value - The value to assign to each key.
 * @returns An object with the specified keys and value.
 */
export function array_fill_keys<T>(keys: string[], value: T): Record<string, T> {
  const result: Record<string, T> = {};
  for (const key of keys) {
    result[key] = value;
  }
  return result;
}

/**
 * Counts the occurrences of each value in an array.
 * 
 * @param arr - The array to count values from.
 * @returns An object with values as keys and their counts as values.
 */
export function array_count_values<T extends string | number>(arr: T[]): Record<T, number> {
  return arr.reduce((acc: Record<T, number>, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as Record<T, number>);
}

/**
 * Merges multiple objects recursively, combining their properties.
 * 
 * @param arrays - The objects to merge.
 * @returns A new object with combined properties.
 */
type AnyObject = { [key: string]: any };
export function array_merge_recursive(...arrays: AnyObject[]): AnyObject {
  const mergeRecursive = (obj1: AnyObject, obj2: AnyObject): AnyObject => {
    const result: AnyObject = { ...obj1 };
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
          result[key] = mergeRecursive(result[key] || {}, obj2[key]);
        } else if (Array.isArray(obj2[key]) && Array.isArray(result[key])) {
          result[key] = result[key].concat(obj2[key]);
        } else {
          result[key] = obj2[key];
        }
      }
    }
    return result;
  };
  return arrays.reduce((acc, obj) => mergeRecursive(acc, obj), {});
}

/**
 * Recursively applies a callback function to each element of an array or object.
 * 
 * @param value - The array or object to walk through.
 * @param callback - The function to apply to each element.
 */
type Walkable = { [key: string]: any } | any[];
export function array_walk_recursive(value: Walkable, callback: (val: any, key: string | number) => void): void {
  if (Array.isArray(value)) {
    value.forEach((element, index) => {
      if (typeof element === 'object' && element !== null) {
        array_walk_recursive(element, callback);
      } else {
        callback(element, index);
      }
    });
  } else if (typeof value === 'object' && value !== null) {
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const element = value[key];
        if (typeof element === 'object' && element !== null) {
          array_walk_recursive(element, callback);
        } else {
          callback(element, key);
        }
      }
    }
  }
}

/**
 * Recursively replaces values in an object or array.
 * 
 * @param arrays - The objects or arrays to replace values in.
 * @returns A new object or array with replaced values.
 */
type Replaceable = { [key: string]: any } | any[];
export function array_replace_recursive(...arrays: Replaceable[]): Replaceable {
  const replaceRecursive = (obj1: Replaceable, obj2: Replaceable): Replaceable => {
    const result: Replaceable = Array.isArray(obj1) ? [...obj1] : { ...obj1 };
    if (Array.isArray(result) && Array.isArray(obj2)) {
      obj2.forEach((value, index) => {
        if (typeof value === 'object' && value !== null && typeof result[index] === 'object') {
          result[index] = replaceRecursive(result[index], value);
        } else {
          result[index] = value;
        }
      });
    } else if (typeof result === 'object' && !Array.isArray(result) && typeof obj2 === 'object' && !Array.isArray(obj2)) {
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          const value = obj2[key];
          if (typeof value === 'object' && value !== null && typeof result[key] === 'object') {
            result[key] = replaceRecursive(result[key], value);
          } else {
            result[key] = value;
          }
        }
      }
    }
    return result;
  };
  return arrays.reduce((acc, obj) => replaceRecursive(acc, obj), {});
}

/**
 * Merges multiple arrays into a single array.
 * 
 * @param arrays - The arrays to merge.
 * @returns A new array containing all elements from the provided arrays.
 */
export function array_merge<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}
