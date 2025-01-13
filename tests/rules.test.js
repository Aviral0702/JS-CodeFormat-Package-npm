import { applyVariableDeclarationRule } from "../src/rules.js";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

test("Convert 'let' to 'var'", () => {
    const code = "let a = 1;";
    const ast = parse(code, { sourceType: "module" });
    traverse(ast, {
        VariableDeclaration(path) {
            applyVariableDeclarationRule(path);
        }
    })
    expect(ast.program.body[0].kind).toBe("var");
});