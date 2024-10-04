import moment from 'moment-timezone';

/**
 * Modifies a given date by adding or subtracting a specific interval.
 *
 * @param {Date} date - The original date.
 * @param {string} modifier - The modification string (e.g., '+1 day', '-2 months').
 * @returns {Date} The modified date.
 */
export function date_modify(date: Date, modifier: string): Date {
  const momentDate = moment.utc(date);
  const match = modifier.match(/([+-]?\d+)\s*(day|days|month|months|year|years|hour|hours|minute|minutes|second|seconds)/);
  if (match) {
    const amount = parseInt(match[1], 10);
    const unit = match[2] as moment.unitOfTime.DurationConstructor;
    return momentDate.add(amount, unit).toDate();
  }
  return date;
}

/**
 * Adds an interval to a given date.
 *
 * @param {Date} date - The original date.
 * @param {number} amount - The amount to add.
 * @param {string} unit - The unit of time to add (e.g., 'days', 'months').
 * @returns {Date} The updated date.
 */
export function date_add(date: Date, amount: number, unit: moment.unitOfTime.DurationConstructor): Date {
  return moment.utc(date).add(amount, unit).toDate();
}

/**
 * Subtracts an interval from a given date.
 *
 * @param {Date} date - The original date.
 * @param {number} amount - The amount to subtract.
 * @param {string} unit - The unit of time to subtract (e.g., 'days', 'months').
 * @returns {Date} The updated date.
 */
export function date_sub(date: Date, amount: number, unit: moment.unitOfTime.DurationConstructor): Date {
  return moment.utc(date).subtract(amount, unit).toDate();
}

/**
 * Sets the timestamp for a given date.
 *
 * @param {Date} date - The original date.
 * @param {number} timestamp - The Unix timestamp to set.
 * @returns {Date} The updated date.
 */
export function date_timestamp_set(date: Date, timestamp: number): Date {
  return moment.unix(timestamp).toDate();
}

/**
 * Gets the Unix timestamp from a given date.
 *
 * @param {Date} date - The original date.
 * @returns {number} The Unix timestamp.
 */
export function date_timestamp_get(date: Date): number {
  return moment(date).unix();
}