const validateRoute = require('./validatorRoutes');
const readFile = require('./readFile');
const validateLink = require('./validatorLinks');

function mdLinks(route, options) {
  try {
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
        throw error;
      });
  } catch (error) {
    return Promise.reject(error);
  }
}

mdLinks('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/panda.jpg', { validate: true })
  .then(links => {
    console.log(links);
  })
  .catch(error => {
    console.log(error);
  });

module.exports = mdLinks;
