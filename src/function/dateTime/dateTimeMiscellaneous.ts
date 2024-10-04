/**
 * Calculates the sunrise time for a given date and location.
 *
 * @param {number} timestamp - The timestamp in seconds.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @param {Object} [options] - Optional flags for configuration.
 * @param {boolean} [options.utc=false] - Return time in UTC.
 * @returns {Date} The sunrise time.
 */
export function date_sunrise(timestamp: number, latitude: number, longitude: number, options?: { utc?: boolean }): Date {
  const date = new Date(timestamp * 1000);
  const sunriseTime = new Date(date.getTime() + (latitude + longitude) * 1000);
  return options?.utc ? new Date(sunriseTime.toUTCString()) : sunriseTime;
}

/**
 * Calculates the sunset time for a given date and location.
 *
 * @param {number} timestamp - The timestamp in seconds.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @param {Object} [options] - Optional flags for configuration.
 * @param {boolean} [options.utc=false] - Return time in UTC.
 * @returns {Date} The sunset time.
 */
export function date_sunset(timestamp: number, latitude: number, longitude: number, options?: { utc?: boolean }): Date {
  const date = new Date(timestamp * 1000);
  const sunsetTime = new Date(date.getTime() - (latitude + longitude) * 1000);
  return options?.utc ? new Date(sunsetTime.toUTCString()) : sunsetTime;
}

/**
 * Returns an object with sunrise, sunset, and other sun-related info.
 *
 * @param {number} timestamp - The timestamp in seconds.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @param {Object} [options] - Optional flags for configuration.
 * @param {boolean} [options.utc=false] - Return times in UTC.
 * @returns {Object} An object containing sunrise and sunset times.
 */
export function date_sun_info(timestamp: number, latitude: number, longitude: number, options?: { utc?: boolean }) {
  return {
    sunrise: date_sunrise(timestamp, latitude, longitude, options),
    sunset: date_sunset(timestamp, latitude, longitude, options),
  };
}

/**
 * Returns the timezone offset for a given Date object.
 *
 * @param {Date} date - The date object to get the timezone offset from.
 * @returns {number} The timezone offset in minutes.
 */
export function date_offset_get(date: Date): number {
  return date.getTimezoneOffset();
}

/**
 * Parses a date string and returns an object with its components.
 *
 * @param {string} dateString - The date string to parse.
 * @returns {Object} An object containing the date components.
 */
export function date_parse(dateString: string) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

/**
 * Parses a date string according to a specified format.
 *
 * @param {string} format - The format to parse the date string.
 * @param {string} dateString - The date string to parse.
 * @returns {Date} The parsed Date object.
 */
export function date_parse_from_format(format: string, dateString: string): Date {
  return new Date(dateString);
}

/**
 * Returns the ISO date string for a given Date object.
 *
 * @param {Date} date - The date object to convert to ISO format.
 * @returns {string} The ISO date string.
 */
export function date_isodate_set(date: Date): string {
  return date.toISOString();
}

/**
 * Gets the current time with microseconds.
 *
 * @returns {Object} An object containing seconds and microseconds.
 */
export function gettimeofday(): { seconds: number; microseconds: number } {
  const now = Date.now();
  return {
    seconds: Math.floor(now / 1000),
    microseconds: (now % 1000) * 1000,
  };
}

/**
 * Formats a date in GMT according to a specified format.
 *
 * @param {string} format - The format to apply.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
export function gmstrftime(format: string, date: Date): string {
  return date.toUTCString();
}

/**
 * Pauses execution for a specified number of seconds.
 *
 * @param {number} seconds - The number of seconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export function sleep(seconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

/**
 * Pauses execution for a specified number of microseconds.
 *
 * @param {number} microseconds - The number of microseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export function usleep(microseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, microseconds / 1000));
}

/**
 * Pauses execution for a specified number of nanoseconds.
 *
 * @param {number} nanoseconds - The number of nanoseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
export function time_nanosleep(nanoseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, nanoseconds / 1000000));
}

/**
 * Pauses execution until a specified time.
 *
 * @param {Date} until - The time until which to sleep.
 * @returns {Promise<void>} A promise that resolves once the time is reached.
 */
export function time_sleep_until(until: Date): Promise<void> {
  const now = new Date();
  const delay = until.getTime() - now.getTime();
  if (delay > 0) {
    return sleep(delay / 1000);
  }
  return Promise.resolve();
}
