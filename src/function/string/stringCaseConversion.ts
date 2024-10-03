/**
 * Converts a string to uppercase.
 * 
 * @param str - The input string.
 * @returns The string converted to uppercase.
 */
export function strtoupper(str: string): string {
  return str.toUpperCase();
}

/**
 * Converts a string to lowercase.
 * 
 * @param str - The input string.
 * @returns The string converted to lowercase.
 */
export function strtolower(str: string): string {
  return str.toLowerCase();
}

/**
 * Capitalizes the first character of a string.
 * 
 * @param str - The input string.
 * @returns The string with the first character capitalized. Returns an empty string if input is empty.
 */
export function ucfirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Makes the first character of a string lowercase.
 * 
 * @param str - The input string.
 * @returns The string with the first character in lowercase. Returns an empty string if input is empty.
 */
export function lcfirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Capitalizes the first character of each word in a string.
 * 
 * @param str - The input string.
 * @returns The string with the first character of each word capitalized.
 */
export function ucwords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
