import moment from 'moment-timezone';

let defaultTimezone: string = moment.tz.guess();

/**
 * Formats a given timestamp according to the provided format.
 *
 * @param {string} format - The format of the output date (supports 'Y', 'm', 'd', 'H', 'i', 's').
 * @param {number} [timestamp=Math.floor(Date.now() / 1000)] - The timestamp to format (default is current timestamp).
 * @returns {string} The formatted date.
 */
export function date(format: string, timestamp: number = Math.floor(Date.now() / 1000)): string {
  const dateObj = new Date(timestamp * 1000);
  const options: Record<string, string> = {
      Y: dateObj.getUTCFullYear().toString(),
      m: ('0' + (dateObj.getUTCMonth() + 1)).slice(-2),
      d: ('0' + dateObj.getUTCDate()).slice(-2),
      H: ('0' + dateObj.getUTCHours()).slice(-2),
      i: ('0' + dateObj.getUTCMinutes()).slice(-2),
      s: ('0' + dateObj.getUTCSeconds()).slice(-2),
  };
  return format.replace(/Y|m|d|H|i|s/g, (match) => options[match]);
}

/**
 * Returns the current Unix timestamp.
 *
 * @returns {number} The current timestamp in seconds.
 */
export function time(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Returns the Unix timestamp for a specific date and time.
 *
 * @param {number} hour - The hour (0-23).
 * @param {number} minute - The minute (0-59).
 * @param {number} second - The second (0-59).
 * @param {number} month - The month (1-12).
 * @param {number} day - The day (1-31).
 * @param {number} year - The full year (e.g., 2024).
 * @returns {number} The Unix timestamp.
 */
export function mktime(hour: number, minute: number, second: number, month: number, day: number, year: number): number {
  const date = new Date(year, month - 1, day, hour, minute, second);
  return Math.floor(date.getTime() / 1000);
}

/**
 * Returns the Unix timestamp for a specific date and time in UTC.
 *
 * @param {number} hour - The hour (0-23).
 * @param {number} minute - The minute (0-59).
 * @param {number} second - The second (0-59).
 * @param {number} month - The month (1-12).
 * @param {number} day - The day (1-31).
 * @param {number} year - The full year (e.g., 2024).
 * @returns {number} The Unix timestamp in UTC.
 */
export function gmmktime(hour: number, minute: number, second: number, month: number, day: number, year: number): number {
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return Math.floor(date.getTime() / 1000);
}

/**
 * Parses a textual datetime description into a Unix timestamp.
 *
 * @param {string} text - The textual datetime description (e.g., '2024-10-04').
 * @returns {number | null} The Unix timestamp, or null if the input is invalid.
 */
export function strtotime(text: string): number | null {
  const parsedDate = Date.parse(text);
  return isNaN(parsedDate) ? null : Math.floor(parsedDate / 1000);
}

/**
 * Creates a Date object from a given time string or the current time.
 *
 * @param {string} [time='now'] - The time string (default is 'now').
 * @returns {Date} The Date object.
 */
export function date_create(time: string = 'now'): Date {
  return time === 'now' ? new Date() : new Date(time);
}

/**
 * Creates a Date object from a custom format and a time string.
 *
 * @param {string} format - The format to parse the time (supports 'd', 'm', 'Y').
 * @param {string} time - The time string to parse.
 * @returns {Date | null} The Date object, or null if parsing fails.
 */
export function date_create_from_format(format: string, time: string): Date | null {
  const formatRegex = /d|m|Y/g;
  let day: number, month: number, year: number;
  const dateParts = format.match(formatRegex);
  const timeParts = time.split('-').map(Number);
  if (dateParts && dateParts.length === 3 && timeParts.length === 3) {
      day = timeParts[dateParts.indexOf('d')];
      month = timeParts[dateParts.indexOf('m')];
      year = timeParts[dateParts.indexOf('Y')];
      const parsedDate = new Date(year, month - 1, day);
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
  }
  return null;
}

/**
 * Creates an immutable Date object from a time string or the current time.
 *
 * @param {string} [time='now'] - The time string (default is 'now').
 * @returns {Readonly<Date>} An immutable Date object.
 */
export function date_create_immutable(time: string = 'now'): Readonly<Date> {
  return Object.freeze(new Date(time));
}

/**
 * Creates an immutable Date object from a custom format and a time string.
 *
 * @param {string} format - The format to parse the time (supports 'd', 'm', 'Y').
 * @param {string} time - The time string to parse.
 * @returns {Readonly<Date> | null} An immutable Date object, or null if parsing fails.
 */
export function date_create_immutable_from_format(format: string, time: string): Readonly<Date> | null {
  const date = date_create_from_format(format, time);
  return date ? Object.freeze(date) : null;
}

/**
 * Sets the default timezone for date and time functions.
 *
 * @param {string} timezone - The timezone identifier (e.g., 'America/New_York').
 * @returns {boolean} True if the timezone is valid and successfully set, false otherwise.
 */
export function date_default_timezone_set(timezone: string): boolean {
    if (moment.tz.zone(timezone)) {
        defaultTimezone = timezone;
        console.log(`Timezone set to: ${timezone}`);
        return true;
    } else {
        console.error(`Invalid timezone: ${timezone}`);
        return false;
    }
}

/**
 * Gets the current default timezone.
 *
 * @returns {string} The current default timezone.
 */
export function date_default_timezone_get(): string {
    return defaultTimezone;
}