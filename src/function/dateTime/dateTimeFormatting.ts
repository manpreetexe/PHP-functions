import moment from 'moment';

/**
 * Formats a date using a specified format.
 *
 * @param {Date | moment.Moment} date - The date to format.
 * @param {string} format - The format string.
 * @returns {string} The formatted date.
 */
export function date_format(date: Date | moment.Moment, format: string): string {
    return moment(date).format(format);
}

/**
 * Formats a date using strftime-like formatting.
 *
 * @param {string} format - The format string with placeholders (%Y, %m, %d, etc.).
 * @param {Date | moment.Moment} [date=new Date()] - The date to format (defaults to current date).
 * @returns {string} The formatted date.
 */
export function strftime(format: string, date: Date | moment.Moment = new Date()): string {
    const m = moment(date);
    return format
        .replace(/%Y/g, m.format('YYYY'))
        .replace(/%m/g, m.format('MM'))
        .replace(/%d/g, m.format('DD'))
        .replace(/%H/g, m.format('HH'))
        .replace(/%M/g, m.format('mm'))
        .replace(/%S/g, m.format('ss'));
}

/**
 * Returns the GMT date formatted according to the specified format.
 *
 * @param {string} format - The format string.
 * @param {Date | moment.Moment} [date=new Date()] - The date to format (defaults to current date).
 * @returns {string} The formatted GMT date.
 */
export function gmdate(format: string, date: Date | moment.Moment = new Date()): string {
    return moment.utc(date).format(format);
}

/**
 * Returns the date formatted as an integer.
 *
 * @param {string} format - The format string.
 * @param {Date | moment.Moment} [date=new Date()] - The date to format (defaults to current date).
 * @returns {string} The formatted date with non-numeric characters removed.
 */
export function idate(format: string, date: Date | moment.Moment = new Date()): string {
    return moment(date).format(format).replace(/\D/g, '');
}

/**
 * Retrieves date information in a format similar to PHP's getdate().
 *
 * @param {Date | moment.Moment} [date=new Date()] - The date to get information for (defaults to current date).
 * @returns {object} An object containing various date components.
 */
export function getdate(date: Date | moment.Moment = new Date()): object {
    const m = moment(date);
    return {
        seconds: m.seconds(),
        minutes: m.minutes(),
        hours: m.hours(),
        day: m.date(),
        month: m.month() + 1, 
        year: m.year(),
        weekday: m.day(), 
        timestamp: m.unix(),
    };
}

/**
 * Retrieves local time information, similar to PHP's localtime().
 *
 * @returns {object} An object containing local date components.
 */
export function localtime(): object {
    return getdate();
}

/**
 * Gets the current Unix timestamp with microseconds.
 *
 * @param {boolean} [as_float=false] - If true, returns a float; otherwise, returns an array.
 * @returns {string | [string, string]} The current timestamp, either as a float or an array of seconds and microseconds.
 */
export function microtime(as_float: boolean = false): string | [string, string] {
    const now = process.hrtime();
    const seconds = Math.floor(Date.now() / 1000);
    const microseconds = Math.floor(now[1] / 1000);
    return as_float ? (seconds + (microseconds / 1_000_000)).toString() : [seconds.toString(), microseconds.toString()];
}

/**
 * Checks if a date is valid, similar to PHP's checkdate().
 *
 * @param {number} month - The month (1-12).
 * @param {number} day - The day (1-31).
 * @param {number} year - The year (e.g., 2024).
 * @returns {boolean} True if the date is valid; otherwise, false.
 */
export function checkdate(month: number, day: number, year: number): boolean {
    const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD', true);
    return date.isValid() && date.month() === (month - 1) && date.date() === day; 
}
