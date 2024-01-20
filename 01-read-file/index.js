const fs = require('fs');
const path = require('path');
const filePath = path.join('./01-read-file', 'text.txt');
const myStream = fs.createReadStream(filePath, 'utf8');
async function myReadStreamFunction() {
  await myStream.on('data', (result) => {
    console.log(result);
  });
}

myReadStreamFunction();
