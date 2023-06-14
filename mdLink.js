const validateRoute = require('./validatorRoutes');
const readFile = require('./readFile');
const validateLink = require('./validatorLinks');

function mdLinks(route, options) {
  const absolutePath = validateRoute(route);

    return readFile(absolutePath)
      .then(links => {
        if (options && options.validate) {
          const promises = links.map(link => validateLink(link));
          return Promise.all(promises);
        } else {
          return links;
        }
      })
      .catch(error => {
        console.error(error);
      });
  } 

mdLinks('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md', { validate: true })
  .then(links => {
    console.log(links);  
  })
  .catch(error => {
    console.error(error);
  });

  module.exports = mdLinks;