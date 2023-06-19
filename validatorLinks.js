const axios = require('axios');

//const ruta = 'https://developer.mozilla.org/es/docs/Web/HTTP/Status';

function validateLink(link) {
  return new Promise((resolve, reject) => {
    axios.get(link.url)
      .then(response => {
        const status = response.status;
        const isValid = status < 400;

        resolve({
          status: status,
          link: link.url,
          isValid: isValid,
          text: link.text,
          absolutePath: link.absolutePath
        });
      })
      .catch(error => {
        if (error.response) {
          const status = error.response.status;
          const isValid = status < 400;

          resolve({
            status: status,
            link: link.url,
            isValid: isValid,
            text: link.text,
            absolutePath: link.absolutePath
          });
        } else {
          reject('Error al validar el enlace: ' + error.message);
        }
      });
  });
}

/*validateLink(ruta)
  .then(result => {
    console.log('Link:', result.link);
    console.log('Status:', result.status);
    console.log('Valid:', result.isValid);
  })
  .catch(error => {
    console.log('Error:', error);
  });
*/
module.exports = validateLink;