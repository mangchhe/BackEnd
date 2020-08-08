/*
작성일 : 20/08/08
*/

var dns = require('dns');

dns.lookup('www.google.com', function (err, address, family) {
    console.log('IP주소 :', address);
    console.log('IP버전 :', family);
});

var op1 = {
    family: 4
}

dns.lookup("google.com", op1, function (err, address, family) {
    console.log('IPv4 주소 :', address);
})

var op2 = {
    family: 6
}

dns.lookup("google.com", op2, function (err, address, family) {
    console.log('IPv6 주소 :', address);
});