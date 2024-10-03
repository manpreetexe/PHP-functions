/**
 * Splits a string by a specified delimiter into an array of substrings.
 * 
 * @param delimiter - The boundary string at which to split the string.
 * @param str - The string to split.
 * @returns An array of substrings.
 */
export function explode(delimiter: string, str: string): string[] {
  return str.split(delimiter);
}

/**
 * Joins an array of strings into a single string using a specified glue string.
 * 
 * @param glue - The string to join the pieces with.
 * @param pieces - The array of strings to join.
 * @returns A single string consisting of the joined pieces.
 */
export function implode(glue: string, pieces: string[]): string {
  return pieces.join(glue);
}

/**
 * An alias for the implode function. Joins an array of strings into a single string using a specified glue string.
 * 
 * @param glue - The string to join the pieces with.
 * @param pieces - The array of strings to join.
 * @returns A single string consisting of the joined pieces.
 */
export function join(glue: string, pieces: string[]): string {
  return implode(glue, pieces);
}

/**
 * Splits a string into an array of substrings of a specified length.
 * 
 * @param str - The string to split.
 * @param length - The length of each substring (default is 1).
 * @returns An array of substrings.
 */
export function str_split(str: string, length: number = 1): string[] {
  const result: string[] = [];
  for (let i = 0; i < str.length; i += length) {
    result.push(str.slice(i, i + length));
  }
  return result;
}

/**
 * Splits a string into chunks of a specified length and appends an optional ending string to each chunk.
 * 
 * @param str - The string to split.
 * @param chunkLen - The length of each chunk (default is 76).
 * @param end - The string to append after each chunk (default is a newline).
 * @returns A single string consisting of the concatenated chunks.
 */
export function chunk_split(str: string, chunkLen: number = 76, end: string = "\n"): string {
  let result = '';
  for (let i = 0; i < str.length; i += chunkLen) {
    result += str.slice(i, i + chunkLen) + end;
  }
  return result;
}
