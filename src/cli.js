import fs from 'fs';
import path from 'path';
import formatCode from '.';

const filePath = process.argv[2];
if(!filePath){
    // console.error('Please provide a file path');
    process.exit(1);
}
const fullPath = path.resolve(filePath);
const code = fs.readFileSync(fullPath, 'utf-8');
const formattedCode = formatCode(code);
fs.writeFileSync(fullPath, formattedCode);

console.log('Code formatted successfully');