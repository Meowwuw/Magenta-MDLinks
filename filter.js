const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, process.argv[2]); 
const extension = process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`);
  filteredFiles.forEach(file => console.log(file));
});


/*
codigo oficial
const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })*/

    