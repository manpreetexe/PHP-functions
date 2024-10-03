/**
 * Checks if a value exists in an array.
 * 
 * @param value - The value to search for.
 * @param array - The array to search in.
 * @param strict - If true, checks for strict equality (default is false).
 * @returns True if the value is found, false otherwise.
 */
export function in_array<T>(value: T, array: T[], strict: boolean = false): boolean {
  if (strict) {
    return array.includes(value);
  } else {
    return array.some(item => item == value);
  }
}

/**
 * Searches for a value in an array and returns its index.
 * 
 * @param value - The value to search for.
 * @param array - The array to search in.
 * @param strict - If true, checks for strict equality (default is false).
 * @returns The index of the value if found, or undefined if not found.
 */
export function array_search<T>(value: T, array: T[], strict: boolean = false): number | undefined {
  for (let i = 0; i < array.length; i++) {
    if (strict ? array[i] === value : array[i] == value) {
      return i;
    }
  }
  return undefined;
}

/**
 * Returns an array of the keys of an object.
 * 
 * @param array - The object to extract keys from.
 * @returns An array containing the keys of the object.
 */
export function array_keys<T>(array: { [key: string]: T }): string[] {
  return Object.keys(array);
}
