import generate from "@babel/generator";
//generating the code from the AST
function generateCode(ast) {
  return generate(ast, {
    retainLines: true,
    compact: false,
  }).code;
}
