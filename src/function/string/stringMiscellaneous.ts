/**
 * Escapes special characters in a string for use in SQL queries.
 * 
 * @param str - The input string.
 * @returns The string with escaped characters.
 */
 export function addslashes(str: string): string {
  return str.replace(/['"\\]/g, '\\$&');
}

/**
 * Unescapes special characters in a string.
 * 
 * @param str - The input string with escaped characters.
 * @returns The unescaped string.
 */
export function stripslashes(str: string): string {
  return str.replace(/\\(['"\\])/g, '$1');
}

/**
 * Escapes meta characters in a string for use in regular expressions.
 * 
 * @param str - The input string.
 * @returns The string with escaped meta characters.
 */
export function quotemeta(str: string): string {
  return str.replace(/([.\\+*?[^]$()])/g, '\\$1');
}

/**
 * Wraps a string to a specified width.
 * 
 * @param str - The input string.
 * @param width - The maximum width of each line (default is 75).
 * @param breakStr - The string to use for line breaks (default is "\n").
 * @param cut - If true, lines will be cut at the specified width (default is false).
 * @returns The wrapped string.
 */
export function wordwrap(str: string, width: number = 75, breakStr: string = "\n", cut: boolean = false): string {
  if (!str) return "";
  const regex = cut
    ? new RegExp(`.{1,${width}}`, "g")
    : new RegExp(`(\\S.{0,${width - 1}})(\\s|$)|\\S+?(\\s|$)`, "g");
  return str.match(regex)?.join(breakStr) ?? str;
}

/**
 * Parses a query string into an object.
 * 
 * @param str - The query string.
 * @param array - An object to store the parsed parameters (default is an empty object).
 * @returns The updated object with parsed key-value pairs.
 */
export function parse_str(str: string, array: any = {}): any {
  const params = new URLSearchParams(str);
  params.forEach((value, key) => {
    array[key] = value;
  });
  return array;
}

/**
 * Computes the Soundex key of a string.
 * 
 * @param str - The input string.
 * @returns The Soundex key as a string.
 */
export function soundex(str: string): string {
  str = str.toUpperCase().replace(/[^A-Z]/g, ''); // Only keep letters
  if (!str.length) return '';

  const codes: { [key: string]: string } = {
    A: '', E: '', I: '', O: '', U: '', Y: '', H: '', W: '',
    B: '1', F: '1', P: '1', V: '1',
    C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
    D: '3', T: '3',
    L: '4',
    M: '5', N: '5',
    R: '6'
  };

  const firstLetter = str[0];
  str = str
    .split('')
    .map(letter => codes[letter] || '')
    .join('')
    .replace(/(.)\1+/g, '$1');

  return (firstLetter + str).padEnd(4, '0').slice(0, 4);
}

/**
 * Computes the number of similar characters between two strings.
 * 
 * @param first - The first string.
 * @param second - The second string.
 * @param percentObj - An optional object to store the similarity percentage.
 * @returns The number of similar characters.
 */
export function similar_text(first: string, second: string, percentObj?: { value: number }): number {
  let pos1 = 0, pos2 = 0, max = 0, firstLen = first.length, secondLen = second.length;
  for (let i = 0; i < firstLen; i++) {
    for (let j = 0; j < secondLen; j++) {
      let k = 0;
      while ((i + k < firstLen) && (j + k < secondLen) && (first[i + k] === second[j + k])) {
        k++;
      }
      if (k > max) {
        max = k;
        pos1 = i;
        pos2 = j;
      }
    }
  }
  let common = max;
  if (common) {
    if (pos1 && pos2) {
      common += similar_text(first.substring(0, pos1), second.substring(0, pos2));
    }
    if ((pos1 + max < firstLen) && (pos2 + max < secondLen)) {
      common += similar_text(first.substring(pos1 + max), second.substring(pos2 + max));
    }
  }
  if (percentObj && percentObj.hasOwnProperty('value')) {
    percentObj.value = (common * 200) / (firstLen + secondLen); // Similarity percentage
  }
  return common;
}

/**
 * Computes the Levenshtein distance between two strings.
 * 
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns The Levenshtein distance.
 */
export function levenshtein(str1: string, str2: string): number {
  const matrix = [];
  let i, j;

  for (i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }
  for (j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }

  for (i = 1; i <= str1.length; i++) {
    for (j = 1; j <= str2.length; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Substitution
          Math.min(matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j] + 1) // Deletion
        );
      }
    }
  }

  return matrix[str1.length][str2.length];
}

/**
 * Converts newline characters to HTML <br> tags.
 * 
 * @param str - The input string.
 * @returns The string with newline characters replaced by <br> tags.
 */
export function nl2br(str: string): string {
  return str.replace(/\r?\n/g, '<br>');
}