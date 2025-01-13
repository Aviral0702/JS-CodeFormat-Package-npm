import { parse } from "@babel/parser";
function parseCode(code) {
  return parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] });
}
export default parseCode;