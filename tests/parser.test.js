import parseCode from "../src/parser";

test('Convert Code to AST',() => {
    const input = 'const a = 5;';
    const ast = parseCode(input);
    expect(ast).toHaveProperty('type','File');
})