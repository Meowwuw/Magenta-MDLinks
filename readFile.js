const fs = require('fs');
const validateRoute = require('./validatorRoutes');

const ruta = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/Pruebitas/soyMDN.md';

function readFile(file) {
//   const absolutePath = validateRoute(file);

//   if (!absolutePath) {
    
//     return undefined;
//   }

  fs.readFile(absolutePath, 'utf8', (err, data) => {
    if (err) {
        console.log('algo')
      return undefined;
    }

    console.log(absolutePath);
    console.log(data);}
  );
}

console.log(readFile(ruta))

// readFile(ruta)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{

// })
