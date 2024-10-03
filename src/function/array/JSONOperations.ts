type JsonEncodeFlags = {
  prettyPrint?: boolean; // If true, formats the JSON string with indentation for readability.
  replacer?: (key: string, value: unknown) => unknown; // A function that can modify the behavior of the stringification process.
  space?: string | number; // A string or number used for indentation in the output JSON.
};

/**
 * Encodes a JavaScript value to a JSON string.
 * 
 * @param value - The value to encode.
 * @param options - Optional settings for encoding.
 * @returns The JSON string representation of the value.
 * @throws An error if the encoding fails.
 */
export function json_encode(value: unknown, options?: JsonEncodeFlags): string {
  try {
    const space = options?.prettyPrint ? 2 : options?.space || 0;
    return JSON.stringify(value, options?.replacer, space);
  } catch (error) {
    throw new Error(`json_encode error: ${error instanceof Error ? error.message : error}`);
  }
}

/**
 * Decodes a JSON string into a JavaScript value.
 * 
 * @param json - The JSON string to decode.
 * @param asArray - If true, returns the result as an array of key-value pairs.
 * @returns The decoded JavaScript value or an array of key-value pairs if asArray is true.
 * @throws An error if the decoding fails.
 */
export function json_decode<T = unknown>(json: string, asArray: boolean = false): T | Array<{ key: string; value: unknown }> {
  try {
    const parsedValue: Record<string, unknown> = JSON.parse(json);
    if (asArray) {
      return Object.entries(parsedValue).map(([key, value]) => ({ key, value })) as Array<{ key: string; value: unknown }>;
    }
    return parsedValue as T;
  } catch (error) {
    throw new Error(`json_decode error: ${error instanceof Error ? error.message : error}`);
  }
}
