/**
 * Formats a string according to a specified format.
 * 
 * @param format - A string containing format specifiers.
 * @param args - Values to replace the format specifiers.
 * @returns The formatted string.
 */
export function sprintf(format: string, ...args: any[]): string {
  return format.replace(/%([sdif])/g, (match, type) => {
    const value = args.shift();
    switch (type) {
      case 's': return String(value);
      case 'd':
      case 'i': return parseInt(value, 10).toString();
      case 'f': return parseFloat(value).toString();
      default: return match;
    }
  });
}

/**
 * Formats a string using an array of values.
 * 
 * @param format - A string containing format specifiers.
 * @param args - An array of values to replace the format specifiers.
 * @returns The formatted string.
 */
export function vsprintf(format: string, args: any[]): string {
  return sprintf(format, ...args);
}

/**
 * Outputs a formatted string to the console.
 * 
 * @param format - A string containing format specifiers.
 * @param args - Values to replace the format specifiers.
 */
export function printf(format: string, ...args: any[]): void {
  console.log(sprintf(format, ...args));
}

/**
 * Outputs a formatted string to the console using an array of values.
 * 
 * @param format - A string containing format specifiers.
 * @param args - An array of values to replace the format specifiers.
 */
export function vprintf(format: string, args: any[]): void {
  printf(format, ...args);
}

/**
 * Parses a string according to a specified format and returns the values.
 * 
 * @param str - The input string to parse.
 * @param format - A string containing format specifiers.
 * @returns An array of parsed values.
 */
export function sscanf(str: string, format: string): any[] {
  const regex = format
    .replace(/%s/g, '(\\S+)')
    .replace(/%d/g, '(-?\\d+)')
    .replace(/%f/g, '(-?\\d+(\\.\\d+)?)');
  const match = str.match(new RegExp(regex));
  return match ? match.slice(1).map(value => isNaN(Number(value)) ? value : Number(value)) : [];
}

/**
 * Formats a number with grouped thousands and specified decimal places.
 * 
 * @param number - The number to format.
 * @param decimals - The number of decimal points (default is 0).
 * @param decimalSeparator - The character to use as a decimal separator (default is '.').
 * @param thousandsSeparator - The character to use as a thousands separator (default is ',').
 * @returns The formatted number as a string.
 */
export function number_format(
  number: number,
  decimals: number = 0,
  decimalSeparator: string = '.',
  thousandsSeparator: string = ','
): string {
  const fixedNumber = number.toFixed(decimals);
  const parts = fixedNumber.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  return parts.join(decimalSeparator);
}
