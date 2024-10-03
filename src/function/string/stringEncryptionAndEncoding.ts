import * as crypto from 'crypto';

/**
 * Computes the MD5 hash of a string.
 * 
 * @param str - The input string.
 * @returns The MD5 hash of the string as a hexadecimal string.
 */
export function md5(str: string): string {
  return crypto.createHash('md5').update(str, 'utf8').digest('hex');
}

/**
 * Computes the SHA-1 hash of a string.
 * 
 * @param str - The input string.
 * @returns The SHA-1 hash of the string as a hexadecimal string.
 */
export function sha1(str: string): string {
  return crypto.createHash('sha1').update(str, 'utf8').digest('hex');
}

/**
 * Computes the CRC32 checksum of a string.
 * 
 * @param str - The input string.
 * @returns The CRC32 checksum as an unsigned integer.
 */
export function crc32(str: string): number {
  const table: number[] = [];
  for (let i = 0; i < 256; i++) {
    let c = i; 
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < str.length; i++) {
    const byte = str.charCodeAt(i) & 0xff; 
    crc = (crc >>> 8) ^ table[(crc ^ byte) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0; // Convert to unsigned
}

/**
 * Encodes a string in Base64.
 * 
 * @param str - The input string.
 * @returns The Base64-encoded string.
 */
export function base64_encode(str: string): string {
  return Buffer.from(str, 'utf8').toString('base64');
}

/**
 * Decodes a Base64-encoded string.
 * 
 * @param str - The Base64-encoded string.
 * @returns The decoded string.
 */
export function base64_decode(str: string): string {
  return Buffer.from(str, 'base64').toString('utf8');
}
