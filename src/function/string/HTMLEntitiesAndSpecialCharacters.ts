import * as he from 'he';

/**
 * Converts special characters to HTML entities.
 * 
 * @param str - The input string.
 * @returns A string with special characters converted to HTML entities.
 */
export function htmlentities(str: string): string {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

/**
 * Decodes HTML entities to their corresponding characters.
 * 
 * @param str - The string containing HTML entities.
 * @returns A string with HTML entities decoded.
 */
export function html_entity_decode(str: string): string {
  return he.decode(str);
}

/**
 * Converts special characters to HTML entities (specifically for <, >, &, ", and ').
 * 
 * @param str - The input string.
 * @returns A string with special characters converted to HTML entities.
 */
export function htmlspecialchars(str: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return str.replace(/[&<>"']/g, function (m) { return map[m]; });
}

/**
 * Decodes HTML special characters to their corresponding characters.
 * 
 * @param str - The string containing HTML entities.
 * @returns A string with HTML special characters decoded.
 */
export function htmlspecialchars_decode(str: string): string {
  const map: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
  };
  return str.replace(/&(amp|lt|gt|quot|#039);/g, function (m) { return map[m]; });
}
