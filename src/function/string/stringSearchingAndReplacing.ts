/**
 * Replaces all occurrences of a search string with a replacement string in a subject string or array of strings.
 * 
 * @param search - The string to search for.
 * @param replace - The string to replace the search string with.
 * @param subject - The string or array of strings to perform the replacement on.
 * @returns The modified string or array of strings.
 */
export function str_replace(search: string, replace: string, subject: string | string[]): string | string[] {
  if (Array.isArray(subject)) {
    return subject.map(item => item.replace(new RegExp(search, 'g'), replace));
  }
  return subject.replace(new RegExp(search, 'g'), replace);
}

/**
 * Replaces all occurrences of a search string with a replacement string in a subject string or array of strings, 
 * case-insensitively.
 * 
 * @param search - The string to search for.
 * @param replace - The string to replace the search string with.
 * @param subject - The string or array of strings to perform the replacement on.
 * @returns The modified string or array of strings.
 */
export function str_ireplace(search: string, replace: string, subject: string | string[]): string | string[] {
  const caseInsensitiveRegExp = new RegExp(search, 'gi');
  if (Array.isArray(subject)) {
    return subject.map(item => item.replace(caseInsensitiveRegExp, replace));
  }
  return subject.replace(caseInsensitiveRegExp, replace);
}

/**
 * Counts the number of occurrences of a needle string in a haystack string.
 * 
 * @param haystack - The string to search in.
 * @param needle - The string to count occurrences of.
 * @returns The number of occurrences of the needle in the haystack.
 */
export function substr_count(haystack: string, needle: string): number {
  return (haystack.match(new RegExp(needle, 'g')) || []).length;
}

/**
 * Finds the first occurrence of a needle string in a haystack string and returns the part of the haystack
 * before or after the needle, based on the before_needle flag.
 * 
 * @param haystack - The string to search in.
 * @param needle - The string to search for.
 * @param before_needle - If true, returns the part of the haystack before the needle.
 * @returns The substring or false if the needle is not found.
 */
export function strstr(haystack: string, needle: string, before_needle: boolean = false): string | false {
  const index = haystack.indexOf(needle);
  if (index === -1) return false;
  return before_needle ? haystack.slice(0, index) : haystack.slice(index);
}

/**
 * Finds the first occurrence of a needle string in a haystack string, case-insensitively, and returns the part
 * of the haystack before or after the needle, based on the before_needle flag.
 * 
 * @param haystack - The string to search in.
 * @param needle - The string to search for.
 * @param before_needle - If true, returns the part of the haystack before the needle.
 * @returns The substring or false if the needle is not found.
 */
export function stristr(haystack: string, needle: string, before_needle: boolean = false): string | false {
  const lowerHaystack = haystack.toLowerCase();
  const lowerNeedle = needle.toLowerCase();
  const index = lowerHaystack.indexOf(lowerNeedle);
  if (index === -1) return false;
  return before_needle ? haystack.slice(0, index) : haystack.slice(index);
}

/**
 * Finds the first occurrence of a needle string in a haystack string and returns the substring starting from 
 * the needle to the end of the haystack.
 * 
 * @param haystack - The string to search in.
 * @param needle - The string to search for.
 * @returns The substring from the needle to the end of the haystack or false if the needle is not found.
 */
export function strchr(haystack: string, needle: string): string | false {
  const index = haystack.indexOf(needle);
  return index === -1 ? false : haystack.slice(index);
}

/**
 * Finds the last occurrence of a needle string in a haystack string and returns the substring starting from 
 * the needle to the end of the haystack.
 * 
 * @param haystack - The string to search in.
 * @param needle - The string to search for.
 * @returns The substring from the needle to the end of the haystack or false if the needle is not found.
 */
export function strrchr(haystack: string, needle: string): string | false {
  const index = haystack.lastIndexOf(needle);
  return index === -1 ? false : haystack.slice(index);
}

/**
 * Replaces all occurrences of a regex pattern with a replacement string in a subject string or array of strings.
 * 
 * @param pattern - The regex pattern to search for.
 * @param replacement - The string to replace the pattern with.
 * @param subject - The string or array of strings to perform the replacement on.
 * @returns The modified string or array of strings.
 */
export function preg_replace(pattern: RegExp, replacement: string, subject: string | string[]): string | string[] {
  if (Array.isArray(subject)) {
    return subject.map(item => item.replace(pattern, replacement));
  }
  return subject.replace(pattern, replacement);
}

/**
 * Replaces all occurrences of a regex pattern in a subject string or array of strings with the result of a callback function.
 * 
 * @param pattern - The regex pattern to search for.
 * @param callback - The function to call for each match.
 * @param subject - The string or array of strings to perform the replacement on.
 * @returns The modified string or array of strings.
 */
export function preg_replace_callback(
  pattern: RegExp,
  callback: (matches: string[]) => string,
  subject: string | string[]
): string | string[] {
  if (Array.isArray(subject)) {
    return subject.map(item => item.replace(pattern, (...matches) => callback(matches)));
  }
  return subject.replace(pattern, (...matches) => callback(matches));
}
