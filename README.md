# PHP Functions in Node.js - TypeScript Package

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This open-source npm package brings the convenience of PHP built-in functions to Node.js developers who miss using them in their JavaScript code. Whether you're a PHP developer transitioning to Node.js or simply need those familiar functions in your workflow, this package provides a seamless experience!

<br>

## Why this package?

PHP developers often miss the simple and useful built-in functions when switching to Node.js. This package bridges that gap by providing equivalents of PHP built-in functions in Node.js, implemented in TypeScript. Now, you can use functions like `strlen`, `strpos`, `array_merge`, and many more directly in your Node.js projects.

<br>

## Installation

You can install this package via npm:

```
npm install php-functions
```

<br>

## Usage

Here's how to use the package:

```
import { strlen, strpos, array_merge } from 'php-functions';

// Example usage
console.log(strlen('Hello World!')); // Outputs: 12
console.log(strpos('Hello World!', 'World')); // Outputs: 6
console.log(array_merge([1, 2], [3, 4])); // Outputs: [1, 2, 3, 4]
```
<br>

## Available Functions

Currently, the package includes many PHP built-in functions such as `strlen`, `strrev`, `str_word_count`, `strpos`, `stripos`, `strrpos`, `strripos`, `substr`, `substr_replace`, `strcmp`, `strcasecmp`, `strncmp`, `strncasecmp`, `str_replace`, `str_ireplace`, `substr_count`, `strstr`, `stristr`, `strchr`, `strrchr`, `preg_replace`, `preg_replace_callback`, `sprintf`, `vsprintf`, `printf`, `vprintf`, `sscanf`, `number_format`, `strtoupper`, `strtolower`, `ucfirst`, `lcfirst`, `ucwords`, `trim`, `ltrim`, `rtrim`, `str_pad`, `str_repeat`, `chop`, `md5`, `sha1`, `crc32`, `base64_decode`, `base64_encode`, `explode`, `implode`, `join`, `str_split`, `chunk_split`, `preg_match`, `preg_match_all`, `preg_split`, `preg_grep`, `preg_quote`, `htmlentities`, `html_entity_decode`, `htmlspecialchars`, `htmlspecialchars_decode`, `addslashes`, `stripslashes`, `quotemeta`, `wordwrap`, `parse_str`, `soundex`, `similar_text`, `levenshtein`, `nl2br`, `array`, `range`, `count`, `sizeof`, `array_key_exists`, `array_values`, `array_replace`, `array_unique`, `array_filter`, `array_map`, `array_reduce`, `array_walk`, `array_chunk`, `array_splice`, `array_pad`, `array_flip`, `array_column`, `array_fill`, `array_fill_keys`, `array_count_values`, `array_merge_recursive`, `array_walk_recursive`, `array_replace_recursive`, `array_merge`, `sort`, `asort`, `arsort`, `ksort`, `krsort`, `usort`, `uksort`, `natsort`, `natcasesort`, `array_combine`, `array_intersect`, `array_uintersect`, `array_diff`, `array_udiff`, `array_diff_assoc`, `array_diff_uassoc`, `array_intersect_key`, `array_diff_key`, `array_intersect_assoc`, `array_intersect_uassoc`, `in_array`, `array_search`, `array_keys`, `array_rand`, `array_shift`, `array_unshift`, `array_pop`, `array_push`, `array_reverse`, `array_sum`, `array_product`, `array_slice`, `json_encode`, `json_decode`, and more.

<br>

## License

This project is licensed under the GPL v3 License - see the [LICENSE](LICENSE) file for details.

<br>

## Contribution

This is an open-source project, and contributions are welcome! If you wish to contribute, please fork the repository, make your changes, and submit a pull request.

<br>

## Future Plans

We plan to add all PHP functions in the future, so stay tuned! Feel free to request or contribute any missing functions.

<br>

## Support

If you find this package useful, consider giving it a star ⭐ on GitHub. Your support will motivate us to keep improving it!