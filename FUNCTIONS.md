# List of Functions

This document provides a list of available functions in the npm package.

## String Functions

- `strlen` - Get the length of a string.
- `strrev` - Reverse a string.
- `str_word_count` - Count the number of words in a string.
- `strpos` - Find the position of the first occurrence of a substring in a string.
- `stripos` - Find the position of the first occurrence of a case-insensitive substring in a string.
- `strrpos` - Find the position of the last occurrence of a substring in a string.
- `strripos` - Find the position of the last occurrence of a case-insensitive substring in a string.
- `substr` - Return part of a string.
- `substr_replace` - Replace part of a string with another string.
- `strcmp` - Binary safe string comparison.
- `strcasecmp` - Case-insensitive string comparison.
- `strncmp` - Binary safe string comparison of the first n characters.
- `strncasecmp` - Case-insensitive string comparison of the first n characters.
- `str_replace` - Replace all occurrences of the search string with the replacement string.
- `str_ireplace` - Case-insensitive version of `str_replace`.
- `substr_count` - Count the number of substring occurrences.
- `strstr` - Find the first occurrence of a substring in a string.
- `stristr` - Case-insensitive version of `strstr`.
- `strchr` - Alias of `strstr`.
- `strrchr` - Find the last occurrence of a character in a string.
- `preg_replace` - Perform a regular expression search and replace.
- `preg_replace_callback` - Perform a regular expression search and replace using a callback.
- `sprintf` - Return a formatted string.
- `vsprintf` - Return a formatted string from an array.
- `printf` - Output a formatted string.
- `vprintf` - Output a formatted string from an array.
- `sscanf` - Parse input from a string according to a format.
- `number_format` - Format a number with grouped thousands.
- `strtoupper` - Make a string uppercase.
- `strtolower` - Make a string lowercase.
- `ucfirst` - Make the first character of a string uppercase.
- `lcfirst` - Make the first character of a string lowercase.
- `ucwords` - Uppercase the first character of each word in a string.
- `trim` - Strip whitespace from the beginning and end of a string.
- `ltrim` - Strip whitespace from the beginning of a string.
- `rtrim` - Strip whitespace from the end of a string.
- `str_pad` - Pad a string to a certain length with another string.
- `str_repeat` - Repeat a string a specified number of times.
- `chop` - Alias of `rtrim`.
- `md5` - Calculate the MD5 hash of a string.
- `sha1` - Calculate the SHA-1 hash of a string.
- `crc32` - Calculate the CRC32 polynomial of a string.
- `base64_decode` - Decodes data encoded with MIME base64.
- `base64_encode` - Encodes data with MIME base64.

## Array Functions

- `explode` - Split a string by a string into an array.
- `implode` - Join array elements with a string.
- `join` - Alias of `implode`.
- `str_split` - Split a string into an array.
- `chunk_split` - Split a string into chunks.
- `preg_match` - Perform a regular expression match.
- `preg_match_all` - Perform a global regular expression match.
- `preg_split` - Split a string by a regular expression.
- `preg_grep` - Return the elements of an array that match a pattern.
- `preg_quote` - Quote regular expression characters.
- `htmlentities` - Convert all applicable characters to HTML entities.
- `html_entity_decode` - Convert HTML entities to their applicable characters.
- `htmlspecialchars` - Convert special characters to HTML entities.
- `htmlspecialchars_decode` - Convert special HTML entities back to characters.
- `addslashes` - Quote string with slashes.
- `stripslashes` - Un-quotes a string with slashes.
- `quotemeta` - Quote meta characters in a string.
- `wordwrap` - Wrap a string to a given number of characters.
- `parse_str` - Parse a query string into variables.
- `soundex` - Calculate the soundex key of a string.
- `similar_text` - Calculate the similarity between two strings.
- `levenshtein` - Calculate the Levenshtein distance between two strings.
- `nl2br` - Insert HTML line breaks before all newlines in a string.
  
## Date Functions

- `date` - Format a local date and time.
- `time` - Return current Unix timestamp.
- `mktime` - Get Unix timestamp for a date.
- `gmmktime` - Get Unix timestamp for a date (GMT).
- `strtotime` - Parse an English textual datetime into a Unix timestamp.
- `date_create` - Create a DateTime object.
- `date_create_from_format` - Create a DateTime object from a format.
- `date_create_immutable` - Create an immutable DateTime object.
- `date_create_immutable_from_format` - Create an immutable DateTime object from a format.
- `date_default_timezone_set` - Set the default timezone.
- `date_default_timezone_get` - Get the default timezone.
- `date_format` - Format a DateTime object.
- `strftime` - Format a local time/date.
- `gmdate` - Format a GMT date/time.
- `idate` - Format a local time/date as integer.
- `getdate` - Return date information.
- `localtime` - Get current local time.
- `microtime` - Get current Unix timestamp with microseconds.
- `checkdate` - Validate a Gregorian date.
- `date_modify` - Modify a DateTime object.
- `date_add` - Add an interval to a DateTime object.
- `date_sub` - Subtract an interval from a DateTime object.
- `date_timestamp_set` - Set the date and time for a DateTime object.
- `date_timestamp_get` - Get the timestamp for a DateTime object.
- `date_diff` - Calculate the difference between two DateTime objects.
- `date_interval_create_from_date_string` - Create a DateInterval object from a string.
- `date_interval_format` - Format a DateInterval object.
- `timezone_identifiers_list` - Return a list of all timezone identifiers.
- `timezone_abbreviations_list` - Return all timezone abbreviations.
- `timezone_name_from_abbr` - Get the timezone name from abbreviation.
- `timezone_name_get` - Get the timezone name.
- `timezone_offset_get` - Get the timezone offset.
- `timezone_open` - Open a timezone.
- `timezone_transitions_get` - Get timezone transitions for a timezone.
- `timezone_version_get` - Get the timezone database version.
- `cal_days_in_month` - Get the number of days in a month for a specified calendar.
- `cal_from_jd` - Convert Julian Day Count to a calendar date.
- `cal_to_jd` - Convert a calendar date to Julian Day Count.
- `easter_date` - Get the Easter date for a given year.
- `easter_days` - Get the number of days after Easter Sunday.
- `jddayofweek` - Get the day of the week for a Julian Day Count.
- `jdmonthname` - Get the month name for a Julian Day Count.
- `juliantojd` - Convert a Julian calendar date to Julian Day Count.
- `unixtojd` - Convert Unix timestamp to Julian Day Count.
- `date_sunrise` - Calculate sunrise time.
- `date_isodate_set` - Set the date of a DateTime object.
- `date_offset_get` - Get the timezone offset of a DateTime object.
- `date_parse` - Parse a datetime string into an array.
- `date_parse_from_format` - Parse a datetime string into an array based on a format.
- `date_sun_info` - Get information about sunrise and sunset.
- `date_sunset` - Calculate sunset time.
- `gettimeofday` - Get current time with microseconds.
- `gmstrftime` - Format a GMT time/date.
- `time_nanosleep` - Sleep for a given number of seconds and nanoseconds.
- `time_sleep_until` - Sleep until a specific time.
- `usleep` - Sleep for microseconds.
- `sleep` - Delay execution for a specified number of seconds.
