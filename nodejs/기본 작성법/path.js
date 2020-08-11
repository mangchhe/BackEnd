/* 
작성일 : 20/08/11
*/

var path = require('path');

var basename1 = path.basename('c:\\abc\\abc.txt ');
console.log('basename1 :', basename1);

var basename2 = path.basename("c:/abc/abc.txt");
console.log('basename2 :', basename2);

var basename3 = path.basename('abc.txt');
console.log('basename3 :', basename3);

var dirname1 = path.dirname('c:/abc/abc.txt');
console.log('dirname1 :', dirname1);

var dirname2 = path.dirname('abc.txt');
console.log('dirname2 :', dirname2);

var extname1 = path.extname('c:/abc/abc.txt');
console.log('extname1 :', extname1);

var extname2 = path.extname('abc.txt');
console.log('extname2 :', extname2);

var isAbsolute1 = path.isAbsolute('c:/abc/abc.txt');
var isAbsolute2 = path.isAbsolute('abc.txt');
var isAbsolute3 = path.isAbsolute('c:\\abc\\abc.txt');
console.log('isAbsoulte1 :', isAbsolute1);
console.log('isAbsoulte2 :', isAbsolute2);
console.log('isAbsoulte3 :', isAbsolute3);

var join = path.join('aaa', 'bbb', 'ccc.txt');
console.log('join :', join);

var normalize = path.normalize('c:/aaa/../bbb/ccc.txt');
console.log(normalize);