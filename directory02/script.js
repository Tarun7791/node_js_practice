
// summary use module.exports(object) to give properties or methods or data to another files
//  use require to take data from another file
// index.js if we want to take data from many files
// ./ same folder

// const data=require("./math");

// console.log(data.sum(3,4));


// const data=require('./directory/index.js');

// console.log(data);

// jis directory mai import export kr rahe hai usme ye add krni padege

import {sum,multi} from './math.js';

console.log(sum(2,3));