import traverse from "@babel/traverse";
import generate from "@babel/generator";


const ast = parseCode(code);



//generating the code from the AST
function generateCode(ast) {
  return generate(ast, {
    retainLines: true,
    compact: false,
  }).code;
}

