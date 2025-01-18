# JS Formatter

**JS Formatter** is a lightweight and customizable JavaScript/TypeScript code formatting library. It uses Babel's powerful parser and traversal tools to format code according to user-defined rules.

## Features

- Parse JavaScript and TypeScript code using Babel.
- Apply custom formatting rules, including converting quotes, semicolon usage, and more.
- Flexible options for extensibility and integration into various workflows.
- Command-line interface (CLI) support for ease of use.

## Installation

Install the package via npm:

```bash
npm install unique-js-formatter
```

## Usage

### Programmatic Usage

```javascript
import formatCode from 'js-formatter';

const inputCode = 'var a = "hello";';
const options = { useSingleQuotes: true };
const formattedCode = formatCode(inputCode, options);

console.log(formattedCode); // Outputs: let a = 'hello';
```

### CLI Usage

You can use the CLI to format files:

```bash
npx js-formatter <input-file> [options]
```

For example:

```bash
npx js-formatter example.js --useSingleQuotes
```

## Options

The following options are supported:

- **useSingleQuotes**: Convert double quotes to single quotes in strings. Default is `true`.

## Development

### Project Structure

- **src/**: Contains the core implementation of the formatter, including parsing, traversal, and code generation.
- **tests/**: Unit tests for various components of the library.
- **script.js**: A script to test the Abstract Syntax Tree (AST) generation and traversal.

### Running Tests

We use [Jest](https://jestjs.io/) for testing. To run tests, execute:

```bash
npm test
```

### Example Test Case

Here is a sample test case:

```javascript
test('format code', () => {
  const input = 'var a = "hello";';
  const output = "let a = 'hello';";
  expect(formatCode(input, { useSingleQuotes: true })).toBe(output);
});
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Acknowledgements

- [Babel](https://babel.dev/) for providing a robust parser and traversal tools.
- The open-source community for inspiring this project.

## Author

Aviral Asthana

---

Feel free to raise issues or feature requests on the [GitHub repository](#)!

