console.log('Hello console');

const fs = require('fs');
const app2=require('./app2.js');
const _=require('lodash');


console.log(_.isString('Sagor Chowdhuri'));
console.log(`Result= ${app2.add(2,4)}`);

console.log(_.uniq([2,4,3,2,3,4,'Sagor']));

var command = process.argv[2];

if(command==='add'){
    console.log('Adding file');
}
else if(command==='list'){
    console.log('This is list');
}


// fs.appendFileSync('sagor.txt','This is Sagor Chowdhuri');
