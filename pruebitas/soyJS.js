const path = require('path');

// Obtener la ruta absoluta al archivo index.js
const absolutePath = path.resolve(__dirname, 'soyJS.js');
console.log('Ruta absoluta:', absolutePath);

// Obtener la ruta relativa al archivo index.js desde el directorio actual
const currentWorkingDirectory = process.cwd();
const relativePath = path.relative(currentWorkingDirectory, 'soyJS');
console.log('Ruta relativa:', relativePath);