//these are the rules for the AST traversal
function applyVariableDeclarationRule(path) {
  if (path.node.kind === "let") {
    path.node.kind = "var";
  }
}

function applyQuotesRule(path, useSingleQuotes = true) {
  if (path.isStringLiteral()) {
    path.node.value = useSingleQuotes
      ? path.node.value.replace(/"/g, "'")
      : path.node.value.replace(/"/g, "'");
  }
}

export default {applyVariableDeclarationRule, applyQuotesRule};