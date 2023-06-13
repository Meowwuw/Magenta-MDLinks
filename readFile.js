const fs = require('fs');

//const ruta = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/Pruebitas/soyMDN.md';

function extractLinks(file) {
  return new Promise((resolve, reject) => {
    const absolutePath = file;
    if (!absolutePath) {
      reject('Ruta de archivo no proporcionada');
    }

    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        reject('Error al leer el archivo: ' + err);
      } else {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const matches = data.matchAll(linkRegex);
        const links = [];

        for (const match of matches) {
          const url = match[2];
          links.push({ url });
        }

        resolve(links);
      }
    });
  });
}

/* extractLinks(ruta)
  .then(links => {
    console.log('Enlaces encontrados:');
    console.log(links);
  })
  .catch(error => {
    console.log('Error:', error);
  });
*/
  module.exports = extractLinks;