import moment from 'moment';

/**
 * Returns the number of days in a given month of a specific year in a specific calendar.
 *
 * @param {number} calendar - The calendar type (1 = Gregorian, 2 = Julian).
 * @param {number} month - The month (1-12).
 * @param {number} year - The year.
 * @returns {number} The number of days in the month.
 */
export function cal_days_in_month(calendar: number, month: number, year: number): number {
  if (calendar === 1) { // Gregorian Calendar
    return moment(`${year}-${month}-01`).daysInMonth();
  } else if (calendar === 2) { // Julian Calendar
    const isLeapYear = year % 4 === 0; // Julian leap year calculation
    return month === 2 ? (isLeapYear ? 29 : 28) : moment(`${year}-${month}-01`).daysInMonth();
  }
  return 0; // Invalid calendar type
}

/**
 * Converts a Julian Day Count to a date.
 *
 * @param {number} jd - The Julian Day Count.
 * @returns {moment.Moment} The corresponding date.
 */
export function cal_from_jd(jd: number): moment.Moment {
  const date = moment.utc().startOf('day').add(jd - 2451545, 'days'); // Correctly adjust for JD
  return date;
}

/**
 * Converts a date to a Julian Day Count.
 *
 * @param {moment.Moment} date - The date to convert.
 * @returns {number} The Julian Day Count.
 */
export function cal_to_jd(date: moment.Moment): number {
  const jd = Math.floor(date.clone().utc().valueOf() / 86400000) + 2440588; // Convert to Julian Day Count
  return jd;
}

/**
 * Returns the date of Easter for a given year.
 *
 * @param {number} year - The year.
 * @returns {moment.Moment} The date of Easter Sunday.
 */
export function easter_date(year: number): moment.Moment {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 16);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 16);
  const j = c % 16;
  const k = (32 + 2 * e + 2 * i - h - j) % 7;
  const l = Math.floor((a + 11 * h + 22 * k) / 451);
  const month = Math.floor((h + k - 7 * l + 114) / 31);
  const day = ((h + k - 7 * l + 114) % 31) + 1;

  return moment.utc(`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`);
}

/**
 * Returns the number of days between Easter and a given date.
 *
 * @param {moment.Moment} date - The date to compare against Easter.
 * @returns {number} The number of days from Easter to the given date.
 */
export function easter_days(date: moment.Moment): number {
  const easter = easter_date(date.year());
  return date.diff(easter, 'days'); // Difference in days
}

/**
 * Returns the day of the week for a given Julian Day Count.
 *
 * @param {number} jd - The Julian Day Count.
 * @returns {number} The day of the week (0 = Sunday, 6 = Saturday).
 */
export function jddayofweek(jd: number): number {
  return (jd + 1) % 7; // Simple formula to get day of the week from JD
}

/**
 * Returns the name of the month for a given Julian Day Count.
 *
 * @param {number} jd - The Julian Day Count.
 * @returns {string} The name of the month.
 */
export function jdmonthname(jd: number): string {
  const date = cal_from_jd(jd);
  return date.format('MMMM'); // Full month name
}

/**
 * Converts a Julian date to a Julian Day Count.
 *
 * @param {number} month - The month (1-12).
 * @param {number} day - The day of the month (1-31).
 * @param {number} year - The year.
 * @returns {number} The Julian Day Count.
 */
export function juliantojd(month: number, day: number, year: number): number {
  const date = moment(`${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`, 'YYYY-MM-DD');
  return cal_to_jd(date); // Return Julian Day Count
}

/**
 * Converts a Unix timestamp to a Julian Day Count.
 *
 * @param {number} timestamp - The Unix timestamp.
 * @returns {number} The Julian Day Count.
 */
export function unixtojd(timestamp: number): number {
  const date = moment.unix(timestamp); // Convert timestamp to Moment date
  return cal_to_jd(date); // Return Julian Day Count
}