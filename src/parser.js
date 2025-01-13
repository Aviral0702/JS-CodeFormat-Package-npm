import { parse } from "@babel/parser";
function parseCode(code) {
  const ast = parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] }); 
  // console.log(JSON.stringify(ast,null,2));
  return ast;
}
export default parseCode;