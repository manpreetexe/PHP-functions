import moment, { Moment, MomentZone } from 'moment-timezone';

/**
 * Returns an array of all timezone identifiers.
 *
 * @returns {string[]} An array of timezone identifiers.
 */
export function timezone_identifiers_list(): string[] {
  return moment.tz.names();
}

/**
 * Returns a list of timezone abbreviations and their corresponding full names.
 *
 * @returns {Record<string, string[]>} An object mapping timezone abbreviations to their full timezone names.
 */
export function timezone_abbreviations_list(): Record<string, string[]> {
  const abbreviations: Record<string, string[]> = {};
  const timezones = moment.tz.names();

  // Iterate through all timezones and extract their abbreviations
  timezones.forEach((timezone) => {
    const zone: MomentZone | null = moment.tz.zone(timezone);
    if (zone) {
      let currentDate: Moment | any = moment(); // Get current date as a Moment object
      let abbr: string | undefined = zone.abbr(currentDate);
      if (abbr) {
        if (!abbreviations[abbr]) {
          abbreviations[abbr] = [];
        }
        abbreviations[abbr].push(zone.name);
      }
    }
  });

  return abbreviations;
}

/**
 * Returns the timezone name from a given abbreviation.
 *
 * @param {string} abbreviation - The timezone abbreviation.
 * @param {string} [date] - An optional date to determine the correct timezone if ambiguous.
 * @returns {string|null} The full timezone name or null if not found.
 */
export function timezone_name_from_abbr(abbreviation: string, date?: string): string | null {
  const timezones = moment.tz.names();
  const dateObj: Moment = date ? moment(date) : moment();

  for (const timezone of timezones) {
    const zone: MomentZone | null | any = moment.tz.zone(timezone);
    if (zone) {
      const abbr: string | undefined = zone.abbr(dateObj);
      if (abbr === abbreviation) {
        return timezone; // Return the full timezone name
      }
    }
  }

  return null; // If no matching abbreviation found
}

/**
 * Retrieves the name of a timezone from a moment timezone object.
 *
 * @param {string} timezone - The timezone string.
 * @returns {string} The name of the timezone.
 */
export function timezone_name_get(timezone: string): string {
  const zone: MomentZone | null = moment.tz.zone(timezone);
  return zone ? zone.name : ''; // Return the name or empty string if not found
}

/**
 * Retrieves the timezone offset for a given date and timezone.
 *
 * @param {Date} date - The date to get the offset for.
 * @param {string} timezone - The timezone string.
 * @returns {number} The offset in minutes.
 */
export function timezone_offset_get(date: Date, timezone: string): number {
  return moment.tz(date, timezone).utcOffset(); // Ensure date is correctly passed as Moment
}

/**
 * Creates a new moment timezone object for the specified timezone.
 *
 * @param {string} timezone - The timezone string.
 * @returns {Moment} The moment object set to the specified timezone.
 */
export function timezone_open(timezone: string): Moment {
  return moment.tz(timezone);
}

/**
 * Retrieves timezone transitions for a given timezone.
 *
 * @param {string} timezone - The timezone string.
 * @returns {Array<{ time: Date; offset: number }>} An array of transition objects.
 */
export function timezone_transitions_get(timezone: string): Array<{ time: Date; offset: number }> {
  const zone: MomentZone | null = moment.tz.zone(timezone);
  const transitions: Array<{ time: Date; offset: number }> = [];

  if (zone) {
    const startYear = moment().startOf('year').year(); // Current year
    const endYear = startYear + 5; // For the next 5 years

    for (let year = startYear; year <= endYear; year++) {
      const startOfYear: Moment = moment.tz(`${year}-01-01`, timezone);
      const endOfYear: Moment | any = moment.tz(`${year}-12-31`, timezone);

      // Iterate through the first day of each month
      for (let month = 0; month < 12; month++) {
        const date: Moment | any = startOfYear.clone().month(month).startOf('month');
        const offset = zone.utcOffset(date);
        transitions.push({ time: date.toDate(), offset });
      }

      // Add a transition at the end of the year
      const endOffset = zone.utcOffset(endOfYear);
      transitions.push({ time: endOfYear.toDate(), offset: endOffset });
    }
  }

  return transitions;
}

/**
 * Returns the version of the timezone database.
 *
 * @returns {string} The version of the timezone database.
 */
export function timezone_version_get(): string {
  return moment.version; // Accessing the version property from moment
}
