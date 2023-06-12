const path = require('path');

// Obtener la ruta absoluta
const absolutePath = path.resolve(__dirname, 'index.js');
console.log('Ruta absoluta:', absolutePath);

// Obtener la ruta relativa 
const currentWorkingDirectory = process.cwd();
const relativePath = path.relative(currentWorkingDirectory, 'index.js');
console.log('Ruta relativa:', relativePath);

