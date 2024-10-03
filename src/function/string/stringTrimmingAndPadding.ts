/**
 * Trims whitespace or specified characters from the beginning and end of a string.
 * 
 * @param str - The string to trim.
 * @param charlist - Optional string of characters to trim from the ends of the string.
 * @returns The trimmed string.
 */
export function trim(str: string, charlist?: string): string {
  if (!charlist) return str.trim();
  const pattern = new RegExp(`^[${charlist}]+|[${charlist}]+$`, 'g');
  return str.replace(pattern, '');
}

/**
 * Trims whitespace or specified characters from the beginning of a string.
 * 
 * @param str - The string to trim.
 * @param charlist - Optional string of characters to trim from the start of the string.
 * @returns The trimmed string.
 */
export function ltrim(str: string, charlist?: string): string {
  if (!charlist) return str.replace(/^\s+/, '');
  const pattern = new RegExp(`^[${charlist}]+`, 'g');
  return str.replace(pattern, '');
}

/**
 * Trims whitespace or specified characters from the end of a string.
 * 
 * @param str - The string to trim.
 * @param charlist - Optional string of characters to trim from the end of the string.
 * @returns The trimmed string.
 */
export function rtrim(str: string, charlist?: string): string {
  if (!charlist) return str.replace(/\s+$/, '');
  const pattern = new RegExp(`[${charlist}]+$`, 'g');
  return str.replace(pattern, '');
}

/**
 * Pads a string to a specified length with a given pad string.
 * 
 * @param str - The original string to pad.
 * @param length - The desired length of the resulting string.
 * @param padString - The string to use for padding (default is a space).
 * @param padType - The type of padding: 'STR_PAD_LEFT', 'STR_PAD_RIGHT', or 'STR_PAD_BOTH' (default is 'STR_PAD_RIGHT').
 * @returns The padded string.
 */
export function str_pad(str: string, length: number, padString: string = ' ', padType: 'STR_PAD_LEFT' | 'STR_PAD_RIGHT' | 'STR_PAD_BOTH' = 'STR_PAD_RIGHT'): string {
  const strLength = str.length;
  if (strLength >= length) return str;
  const padLength = length - strLength;
  let pad: string;
  switch (padType) {
    case 'STR_PAD_LEFT':
      pad = padString.repeat(Math.ceil(padLength / padString.length)).slice(0, padLength);
      return pad + str;
    case 'STR_PAD_RIGHT':
      pad = padString.repeat(Math.ceil(padLength / padString.length)).slice(0, padLength);
      return str + pad;
    case 'STR_PAD_BOTH':
      const leftPadLength = Math.floor(padLength / 2);
      const rightPadLength = padLength - leftPadLength;
      const leftPad = padString.repeat(Math.ceil(leftPadLength / padString.length)).slice(0, leftPadLength);
      const rightPad = padString.repeat(Math.ceil(rightPadLength / padString.length)).slice(0, rightPadLength);
      return leftPad + str + rightPad;
    default:
      return str;
  }
}

/**
 * Repeats a string a specified number of times.
 * 
 * @param str - The string to repeat.
 * @param num - The number of times to repeat the string.
 * @returns The repeated string.
 */
export function str_repeat(str: string, num: number): string {
  return str.repeat(num);
}

/**
 * Alias for rtrim; trims whitespace or specified characters from the end of a string.
 * 
 * @param str - The string to chop.
 * @param charlist - Optional string of characters to trim from the end of the string.
 * @returns The trimmed string.
 */
export function chop(str: string, charlist?: string): string {
  return rtrim(str, charlist);
}
