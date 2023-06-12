module.exports = () => {
  // ...
};

try {
  const result = mdLinks(path, options);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

module.exports = mdLinks;

