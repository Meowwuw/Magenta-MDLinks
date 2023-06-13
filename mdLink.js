const validateRoute = require('./validatorRoutes');
const extractLinks = require('./readFile');
const validateLink = require('./validatorLinks');

function mdLinks(route, options) {
  const absolutePath = validateRoute(route);

  if (absolutePath) {
    return extractLinks(absolutePath)
      .then(links => {
        if (options && options.validate) {
          const promises = links.map(link => validateLink(link.url));
          return Promise.all(promises);
        } else {
          return links;
        }
      })
      .catch(error => {
        throw new Error('Error al extraer los enlaces: ' + error);
      });
  } else {
    throw new Error('Ruta de archivo no válida');
  }
}

module.exports = mdLinks;

mdLinks('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/Pruebitas/soyMDN.md', { validate: true })
  .then(links => {
    console.log(links);
  })
  .catch(error => {
    console.error(error);
  });