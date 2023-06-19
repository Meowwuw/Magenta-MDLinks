const mdLinks = require('../mdLink.js');
const validateRoute = require('../validatorRoutes.js');
const path = require('path');

jest.mock('../mdLink.js');
jest.mock('axios');

describe('validateRoute', () => {
  it('debería devolver la ruta absoluta para una ruta relativa válida', () => {
    const relativePath = 'pruebitas/soyMDN.md';
    const expectedAbsolutePath = path.normalize('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md');
    const result = validateRoute(relativePath);

    expect(result).toBe(expectedAbsolutePath);
  });

  it('debería devolver la misma ruta absoluta para una ruta absoluta', () => {
    const absolutePath = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md';

    const result = validateRoute(absolutePath);

    expect(result).toBe(absolutePath);
  });

  it('debería devolver "Ruta de archivo no válida o directorio" para una ruta inexistente', () => {
    const nonExistentPath = 'ruta/que/no/existe.md';

    const result = validateRoute(nonExistentPath);

    expect(result).toBe('Ruta de archivo no válida o directorio');
  });

  it('debería devolver "Ruta de archivo no válida o directorio" para una ruta de directorio', () => {
    const directoryPath = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas';

    const result = validateRoute(directoryPath);

    expect(result).toBe('Ruta de archivo no válida o directorio');
  });

  it('debería devolver "Extensión de archivo inválida" para un archivo con una extensión diferente', () => {
    const filePath = 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/noEsMDN.txt';

    const result = validateRoute(filePath);

    expect(result).toBe('Ruta de archivo no válida o directorio');
  });
});

describe('mdLinks', () => {

  it('debería devolver "Ruta de archivo no proporcionada" para una ruta inexistente', () => {
    const expectedErrorMessage = 'Ruta de archivo no proporcionada';

    mdLinks.mockRejectedValue(new Error(expectedErrorMessage));

    return mdLinks('ruta_inexistente.md', { validate: false })
      .catch(err => {
        expect(err.message).toBe(expectedErrorMessage);
      });
  });

  it('debería devolver un array de objetos sin validación',() => {

    const mockData = [
      {
        url: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Wikipedia',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        url: 'https://simple.ripley.com.pe/mujer/marcas-juveniles/index?s=mdco',
        text: 'Ripley',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        url: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Wikipedia2',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        url: 'https://nodejs.org/hjsahsffffffffffffffff',
        text: 'Node.js',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      }
    ]
  
    mdLinks.mockResolvedValue(mockData);

    return mdLinks('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md', { validate: false})
    .then(result => {
      expect(result).toEqual(mockData);
    });
  });

  it('debería devolver un array de objetos con validación',() => {

    const mockData = [
      {
        status: 200,
        link: 'https://es.wikipedia.org/wiki/Markdown',
        isValid: true,
        text: 'Wikipedia',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        status: 200,
        link: 'https://simple.ripley.com.pe/mujer/marcas-juveniles/index?s=mdco',
        isValid: true,
        text: 'Ripley',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        status: 200,
        link: 'https://es.wikipedia.org/wiki/Markdown',
        isValid: true,
        text: 'Wikipedia2',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      },
      {
        status: 404,
        link: 'https://nodejs.org/hjsahsffffffffffffffff',
        isValid: false,
        text: 'Node.js',
        absolutePath: 'C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md'
      }
    ]
  
    mdLinks.mockResolvedValue(mockData);

    return mdLinks('C:/Users/USUARIO/Desktop/Laboratoria/DEV005-md-links-lite/pruebitas/soyMDN.md', { validate: true})
    .then(result => {
      expect(result).toEqual(mockData);
    });
  });
});
