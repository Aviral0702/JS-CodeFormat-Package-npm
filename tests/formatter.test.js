import formatCode from "../src/index.js";

test('format code',() => {
    const input = `let a = 'hello';`;
    const output = `var a = 'hello';`;
    expect(formatCode(input)).toBe(output);
})