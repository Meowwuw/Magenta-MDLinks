const fs = require('fs');
const path = require('path');

//const ruta = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md';

function validateRoute(route) {
  const isRelative = !path.isAbsolute(route);
  let absolutePath = route;

  if (isRelative) {
    absolutePath = path.resolve(route);
  }

  if (!fs.existsSync(absolutePath) || fs.lstatSync(absolutePath).isDirectory()) {
    return undefined;
  }

  const fileExtension = path.extname(absolutePath);
  if (fileExtension !== '.md') {
    return undefined;
    //no retornar undefined
  }

  return absolutePath;
}

//console.log(validateRoute(ruta));

module.exports = validateRoute;