/**
 * Performs a regular expression match.
 * 
 * @param pattern - The pattern to search for (string or RegExp).
 * @param subject - The string to search in.
 * @returns True if the pattern matches the subject, false otherwise.
 */
 export function preg_match(pattern: string | RegExp, subject: string): boolean {
  const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  return regex.test(subject);
}

/**
 * Performs a global regular expression match and returns all matches.
 * 
 * @param pattern - The pattern to search for (string or RegExp).
 * @param subject - The string to search in.
 * @returns An array of matches, or null if no matches are found.
 */
export function preg_match_all(pattern: string | RegExp, subject: string): string[] | null {
  const regex = typeof pattern === 'string' ? new RegExp(pattern, 'g') : new RegExp(pattern.source, 'g');
  return subject.match(regex);
}

/**
 * Splits a string by a regular expression pattern.
 * 
 * @param pattern - The pattern to split by (string or RegExp).
 * @param subject - The string to split.
 * @param limit - The maximum number of splits. If 0, there is no limit.
 * @returns An array of substrings.
 */
export function preg_split(pattern: string | RegExp, subject: string, limit: number = 0): string[] {
  const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  const result = subject.split(regex);
  
  if (limit > 0 && result.length > limit) {
      const limitedResult = result.slice(0, limit - 1); 
      const remainder = subject.split(regex).slice(limit - 1).join(' '); 
      limitedResult.push(remainder); 
      return limitedResult;
  }
  
  return result;
}

/**
 * Filters an array using a regular expression pattern.
 * 
 * @param pattern - The pattern to filter by (string or RegExp).
 * @param array - The array to filter.
 * @returns An array containing elements that match the pattern.
 */
export function preg_grep(pattern: string | RegExp, array: string[]): string[] {
  const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  return array.filter(item => regex.test(item));
}

/**
 * Escapes special characters in a string for use in a regular expression.
 * 
 * @param str - The input string.
 * @param delimiter - The delimiter to escape, default is '/'.
 * @returns A string with special characters escaped.
 */
export function preg_quote(str: string, delimiter: string = '/'): string {
  return str.replace(new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:${delimiter}-]`, 'g'), '\\$&');
}