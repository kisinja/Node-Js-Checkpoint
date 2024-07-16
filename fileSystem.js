const fs = require('fs');

const content = 'Hello World!\n';

fs.writeFile('hello.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been created');
});