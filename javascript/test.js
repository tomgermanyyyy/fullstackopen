var fs = require('fs');

var output = fs
  .readFileSync('data.txt', 'utf-8')
  .split('\n')
  .map((line) => line.split('\t'));

console.log('output', output);
