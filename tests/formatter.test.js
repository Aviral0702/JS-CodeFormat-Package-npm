import formatCode from "../src/index.js";

test('format code',() => {
    const input = 'var a = "hello";';
    const output = `let a 'hello';`;
    expect(formatCode(input)).toBe(output);
})