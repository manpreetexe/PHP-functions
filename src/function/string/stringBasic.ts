/**
 * Returns the length of the given string.
 * @param str - The string to measure.
 * @returns The length of the string.
 */
 export function strlen(str: string): number {
  return str.length;
}

/**
 * Counts the number of words in a string.
 * 
 * @param str - The input string.
 * @param format - The format of the return value:
 *                 0 (default): returns the number of words,
 *                 1: returns an array of words,
 *                 2: returns an object with the position of each word.
 * @returns The number of words, an array of words, or an object of word positions.
 */
export function str_word_count(str: string, format: 0 | 1 | 2 = 0): number | string[] | { [key: number]: string } {
  const words = str.match(/\b\w+\b/g) || [];
  switch (format) {
    case 1: {
      return words;
    }
    case 2: {
      const wordPositions: { [key: number]: string } = {};
      let match;
      const regex = /\b\w+\b/g;
      while ((match = regex.exec(str)) !== null) {
        wordPositions[match.index] = match[0];
      }
      return wordPositions;
    }
    default: {
      return words.length;
    }
  }
}

/**
 * Reverses a given string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function strrev(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Finds the position of the first occurrence of a substring in a string.
 * 
 * @param haystack - The string to search in.
 * @param needle - The substring to search for.
 * @param offset - The position to start searching from.
 * @returns The position of the substring or false if not found.
 */
export function strpos(haystack: string, needle: string, offset: number = 0): number | false {
  const position = haystack.indexOf(needle, offset);
  return position !== -1 ? position : false;
}

/**
 * Finds the position of the first occurrence of a case-insensitive substring in a string.
 * 
 * @param haystack - The string to search in.
 * @param needle - The substring to search for (case insensitive).
 * @param offset - The position to start searching from.
 * @returns The position of the substring or false if not found.
 */
export function stripos(haystack: string, needle: string, offset: number = 0): number | false {
  const position = haystack.toLowerCase().indexOf(needle.toLowerCase(), offset);
  return position !== -1 ? position : false;
}

/**
 * Finds the position of the last occurrence of a substring in a string.
 * 
 * @param haystack - The string to search in.
 * @param needle - The substring to search for.
 * @param offset - The position to search from (optional).
 * @returns The position of the substring or false if not found.
 */
export function strrpos(haystack: string, needle: string, offset?: number): number | false {
  const haystackSlice = offset !== undefined ? haystack.slice(0, offset + 1) : haystack;
  const position = haystackSlice.lastIndexOf(needle);
  return position !== -1 ? position : false;
}

/**
 * Finds the position of the last occurrence of a case-insensitive substring in a string.
 * 
 * @param haystack - The string to search in.
 * @param needle - The substring to search for (case insensitive).
 * @param offset - The position to search from (optional).
 * @returns The position of the substring or false if not found.
 */
export function strripos(haystack: string, needle: string, offset?: number): number | false {
  const haystackLower = haystack.toLowerCase();
  const needleLower = needle.toLowerCase();
  const haystackSlice = offset !== undefined ? haystackLower.slice(0, offset + 1) : haystackLower;
  const position = haystackSlice.lastIndexOf(needleLower);
  return position !== -1 ? position : false;
}

/**
 * Returns a portion of a string specified by the start and length.
 * 
 * @param str - The input string.
 * @param start - The starting position.
 * @param length - The length of the substring (optional).
 * @returns The substring.
 */
export function substr(str: string, start: number, length?: number): string {
  const startPos = start < 0 ? str.length + start : start;
  if (length === undefined) {
    return str.slice(startPos);
  }
  const endPos = length < 0 ? str.length + length : startPos + length;
  return str.slice(startPos, endPos);
}

/**
 * Replaces a portion of a string with another string.
 * 
 * @param str - The input string.
 * @param replacement - The string to insert.
 * @param start - The starting position for the replacement.
 * @param length - The length of the portion to replace (optional).
 * @returns The modified string.
 */
export function substr_replace(str: string, replacement: string, start: number, length?: number): string {
  const startPos = start < 0 ? str.length + start : start;
  if (length === undefined) {
    return str.slice(0, startPos) + replacement;
  }
  const endPos = length < 0 ? str.length + length : startPos + length;
  return str.slice(0, startPos) + replacement + str.slice(endPos);
}

/**
 * Compares two strings.
 * 
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns 0 if equal, 1 if str1 is greater, -1 if str2 is greater.
 */
export function strcmp(str1: string, str2: string): number {
  if (str1 === str2) {
    return 0;
  }
  return str1 > str2 ? 1 : -1;
}

/**
 * Compares two strings case-insensitively.
 * 
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns 0 if equal, 1 if str1 is greater, -1 if str2 is greater.
 */
export function strcasecmp(str1: string, str2: string): number {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  if (lowerStr1 === lowerStr2) {
    return 0;
  }
  return lowerStr1 > lowerStr2 ? 1 : -1;
}

/**
 * Compares two strings up to a specified length.
 * 
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @param n - The length to compare.
 * @returns 0 if equal, 1 if str1 is greater, -1 if str2 is greater.
 */
export function strncmp(str1: string, str2: string, n: number): number {
  const subStr1 = str1.slice(0, n);
  const subStr2 = str2.slice(0, n);
  if (subStr1 === subStr2) {
    return 0;
  }
  return subStr1 > subStr2 ? 1 : -1;
}

/**
 * Compares two strings case-insensitively up to a specified length.
 * 
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @param n - The length to compare.
 * @returns 0 if equal, 1 if str1 is greater, -1 if str2 is greater.
 */
export function strncasecmp(str1: string, str2: string, n: number): number {
  const subStr1 = str1.slice(0, n).toLowerCase();
  const subStr2 = str2.slice(0, n).toLowerCase();
  if (subStr1 < subStr2) {
    return -1;
  } else if (subStr1 > subStr2) {
    return 1;
  }
  return 0;
}
