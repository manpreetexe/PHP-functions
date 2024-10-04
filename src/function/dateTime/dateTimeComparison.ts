import moment from 'moment-timezone';

/**
 * Calculates the difference between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {object} An object containing the difference in years, months, and days.
 */
export function date_diff(date1: Date, date2: Date): { years: number; months: number; days: number } {
  const start = moment(date1);
  const end = moment(date2);
  const years = end.diff(start, 'years');
  start.add(years, 'years');
  const months = end.diff(start, 'months');
  start.add(months, 'months');
  const days = end.diff(start, 'days');
  return { years, months, days };
}

/**
 * Creates a duration from a string representation of the interval.
 *
 * @param {string} interval - The interval string (e.g., '1 day', '2 months').
 * @returns {moment.Duration} The created duration.
 */
export function date_interval_create_from_date_string(interval: string): moment.Duration {
  const match = interval.match(/([+-]?\d+)\s*(day|days|month|months|year|years|hour|hours|minute|minutes|second|seconds)/);
  if (match) {
    const amount = parseInt(match[1], 10);
    const unit = match[2] as moment.unitOfTime.DurationConstructor;
    return moment.duration(amount, unit);
  }
  throw new Error("Invalid interval string");
}

/**
 * Formats a duration as a string.
 *
 * @param {moment.Duration} duration - The duration to format.
 * @returns {string} The formatted duration string.
 */
export function date_interval_format(duration: moment.Duration): string {
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  let parts: string[] = [];
  if (years) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
  if (months) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
  if (days) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  if (hours) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (seconds) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
  return parts.join(', ');
}
