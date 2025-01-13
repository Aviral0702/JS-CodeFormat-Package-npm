import traverse from "@babel/traverse";
import { applyVariableDeclarationRule, applyQuotesRule } from "./rules.js";
function traverseCode(ast, options={}) {
  traverse(ast, {
    enter(path) {
      applyVariableDeclarationRule(path);
      applyQuotesRule(path,options.useSingleQuotes);
    },
  });
}

export default traverseCode;
