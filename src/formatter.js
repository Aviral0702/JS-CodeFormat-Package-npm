import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
//parsing the code using the babel parser
function parseCode(code) {
  return parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] });
}

//traversing the AST and returning the code

const ast = parseCode(code);

function traverseCode(ast) {
  traverse(ast, {
    enter(path) {
      if (path.isVariableDeclaration()) {
        if (path.node.kind === "let") {
          path.node.kind = "var";
        }
      }
    },
  });
}

//generating the code from the AST
function generateCode(ast) {
  return generate(ast, {
    retainLines: true,
    compact: false,
  }).code;
}

