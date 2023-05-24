const fs = require('fs');

function mdLinks(path, options) {
  if (!fs.existsSync(path)) {
    throw new Error('La ruta especificada no existe.');
  }

  const stats = fs.statSync(path);
  if (stats.isFile()) {
    // La ruta es un archivo
  } else if (stats.isDirectory()) {
    // La ruta es un directorio
  }
}

const mdLinks = require('./mdLinks');

// Ejemplo de uso
const path = 'ruta/al/archivo-o-directorio';
const options = {
  // opciones si las hay
};

try {
  const result = mdLinks(path, options);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

module.exports = mdLinks;

