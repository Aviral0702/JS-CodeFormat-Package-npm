import parseCode from './parser.js';
import traverseCode from './traverse.js';
import generateCode from './generator.js';

function formatCode(inputCode,options = {useSingleQuotes: true}) {
  //parse the code
  const ast = parseCode(inputCode);
  traverseCode(ast,options);
  return generateCode(ast);
}

export default formatCode;