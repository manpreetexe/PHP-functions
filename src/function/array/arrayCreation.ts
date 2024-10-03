/**
 * Creates an array from the provided elements.
 * 
 * @param elements - Elements to be included in the array.
 * @returns An array containing the provided elements.
 */
export function array(...elements: any[]): any[] {
  return elements;
}

/**
* Generates an array of numbers in a specified range.
* 
* @param start - The starting number of the range.
* @param end - The ending number of the range.
* @param step - The increment or decrement between each number (default is 1).
* @returns An array of numbers from start to end, inclusive.
* @throws Error if step is zero, or if the direction of the step does not match the start and end values.
*/
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  if (step === 0) {
    throw new Error("Step cannot be zero.");
  }
  if (start < end && step < 0) {
    throw new Error("Step must be positive when start is less than end.");
  }
  if (start > end && step > 0) {
    throw new Error("Step must be negative when start is greater than end.");
  }
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i);
  }
  return result;
}
