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

Currently, the package includes many PHP built-in functions such as `strlen`, `strrev`, `str_word_count` and more. Explore our comprehensive list of functions in [FUNCTIONS.md](FUNCTIONS.md).

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