/**
 * Combines two arrays into an object, using the first array as keys and the second as values.
 * 
 * @param keys - An array of keys.
 * @param values - An array of values.
 * @returns An object mapping keys to values, or undefined if the arrays are of different lengths.
 */
export function array_combine<K extends string | number, V>(keys: K[], values: V[]): Record<K, V> | undefined {
  if (keys.length !== values.length) {
    return undefined;
  }
  const result: Record<K, V> = {} as Record<K, V>;
  keys.forEach((key, index) => {
    result[key] = values[index];
  });
  return result;
}

/**
 * Computes the intersection of multiple arrays.
 * 
 * @param arrays - Arrays to intersect.
 * @returns An array containing values common to all arrays.
 */
export function array_intersect<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, array) => acc.filter(item => array.includes(item)));
}

/**
 * Computes the intersection of multiple arrays using a custom comparator.
 * 
 * @param arrays - Arrays to intersect.
 * @param comparator - A function that compares two values.
 * @returns An array containing values that are common to all arrays according to the comparator.
 */
export function array_uintersect<T>(arrays: T[][], comparator: (a: T, b: T) => number): T[] {
  return arrays.reduce((acc, array) => acc.filter(item => array.some(elem => comparator(item, elem) === 0)));
}

/**
 * Computes the difference of multiple arrays.
 * 
 * @param arrays - Arrays to compare.
 * @returns An array containing values from the first array that are not present in the other arrays.
 */
export function array_diff<T>(...arrays: T[][]): T[] {
  return arrays[0].filter(item => !arrays.slice(1).some(array => array.includes(item)));
}

/**
 * Computes the difference of multiple arrays using a custom comparator.
 * 
 * @param arrays - Arrays to compare.
 * @param comparator - A function that compares two values.
 * @returns An array containing values from the first array that are not present in the other arrays according to the comparator.
 */
export function array_udiff<T>(arrays: T[][], comparator: (a: T, b: T) => number): T[] {
  return arrays[0].filter(item => !arrays.slice(1).some(array => array.some(elem => comparator(item, elem) === 0)));
}

/**
 * Computes the difference of multiple associative arrays based on both keys and values.
 * 
 * @param arrays - Arrays to compare.
 * @returns An object containing keys and values that are only in the first array.
 */
export function array_diff_assoc<T extends Record<string, unknown>>(
  ...arrays: T[]
): Partial<T> {
  const result: T = { ...arrays[0] };
  for (const array of arrays.slice(1)) {
    for (const key in array) {
      if (key in result && result[key] === array[key]) {
        delete result[key];
      }
    }
  }
  for (const key in result) {
    for (const array of arrays.slice(1)) {
      if (key in array) {
        delete result[key];
        break;
      }
    }
  }
  return result;
}

/**
 * Computes the difference of multiple associative arrays using a custom comparator for values.
 * 
 * @param arrays - Arrays to compare.
 * @param comparator - A function that compares two values.
 * @returns An object containing keys and values that are only in the first array.
 */
export function array_diff_uassoc<K extends string | number, V>(
  arrays: Record<K, V>[],
  comparator: (a: V, b: V) => number
): Partial<Record<K, V>> {
  const result: Record<K, V> = { ...arrays[0] };
  const keysToRemove: K[] = [];
  for (const array of arrays.slice(1)) {
    for (const key in array) {
      if (key in result && comparator(result[key], array[key]) === 0) {
        keysToRemove.push(key as K);
      }
    }
  }
  for (const key of keysToRemove) {
    delete result[key];
  }
  return result;
}

/**
 * Computes the intersection of multiple associative arrays based on keys.
 * 
 * @param arrays - Arrays to intersect.
 * @returns An object containing keys and values that are common across all arrays.
 */
export function array_intersect_key<T extends Record<string, unknown>>(
  ...arrays: T[]
): Partial<T> {
  if (arrays.length === 0) return {};
  const firstArrayKeys = new Set<keyof T>(Object.keys(arrays[0]) as Array<keyof T>);
  const result: Partial<T> = {};
  for (const key of Array.from(firstArrayKeys)) {
    let isCommon = true;
    for (const array of arrays.slice(1)) {
      if (!(key in array) || array[key] !== arrays[0][key]) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      result[key] = arrays[0][key] as T[keyof T];
    }
  }
  return result;
}

/**
 * Computes the difference of multiple associative arrays based on keys.
 * 
 * @param arrays - Arrays to compare.
 * @returns An object containing keys and values that are only in the first array.
 */
export function array_diff_key<T extends Record<string, unknown>>(
  ...arrays: T[]
): Partial<T> {
  if (arrays.length === 0) return {};
  const result: Partial<T> = { ...arrays[0] };
  const keysToRemove = new Set<string>();
  for (const array of arrays.slice(1)) {
    for (const key of Object.keys(array)) {
      if (key in result) {
        keysToRemove.add(key);
      }
    }
  }
  for (const key of Array.from(keysToRemove)) {
    delete result[key];
  }
  return result;
}

/**
 * Computes the intersection of multiple associative arrays based on both keys and values.
 * 
 * @param arrays - Arrays to intersect.
 * @returns An object containing keys and values that are common across all arrays.
 */
export function array_intersect_assoc<T extends Record<string, unknown>>(
  ...arrays: T[]
): Partial<T> {
  if (arrays.length === 0) return {};
  const firstArray = arrays[0];
  const result: Partial<T> = {};
  for (const key in firstArray) {
    let isCommon = true;
    for (const array of arrays.slice(1)) {
      if (!(key in array) || array[key] !== firstArray[key]) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      result[key] = firstArray[key];
    }
  }
  return result;
}

/**
 * Computes the intersection of multiple associative arrays using a custom comparator for values.
 * 
 * @param arrays - Arrays to intersect.
 * @returns An object containing keys and values that are common across all arrays.
 */
export function array_intersect_uassoc<T>(
  ...arrays: Array<Record<string, T>>
): Record<string, T> {
  if (arrays.length === 0) return {};
  const firstArray = arrays[0];
  const result: Record<string, T> = {};
  const comparator = (a: T, b: T) => {
    return a === b ? 0 : a < b ? -1 : 1;
  };
  for (const key in firstArray) {
    let isCommon = true;
    for (const array of arrays.slice(1)) {
      if (!(key in array) || comparator(array[key], firstArray[key]) !== 0) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      result[key] = firstArray[key];
    }
  }
  return result;
}
