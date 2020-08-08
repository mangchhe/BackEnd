/* 
작성일 : 20/08/08
*/

console.log('__dirname :', __dirname);

console.log('__filename :', __filename);
/*
console.log('node.js 코드 입니다.');
setImmediate(function () {
    console.log('Immediate 동작 1');
});
console.log('node.js 코드 입니다.');
var a1 = setImmediate(function () {
    console.log('Immediate 동작 2');
})
console.log('node.js 코드 입니다.');

clearImmediate(a1);
 */

/* 
var a1 = 0;
var a2 = setInterval(function () {
   console.log('interval 동작');
   a1++;
   console.log('a1 :', a1);
   if (a1 >= 5) {
       clearInterval(a2);
   }
}, 1000);
*/

var a1 = setTimeout(function () {
    console.log('timeout 동작');
}, 1000);

clearTimeout(a1);

console.log('작업이 모두 완료되었습니다.');