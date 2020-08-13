/* 
작성일 : 20/08/12      
*/

var http = require('http');
var url = require('url');
const { type } = require('os');

var server = http.createServer(function (req, res) {

    var q = url.parse(req.url, true);

    res.writeHead(200, { "content-type": "text/html" });
    //res.writeHead(200, {"content-type" : "audio/mp3"});

    res.write('<DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write("<meta charset='utf-8' />");
    res.write('</head>');
    res.write('<body>');

    switch (q.pathname) {
        case "/":
            res.write('<h1>root 입니다.</h1>');
            res.write('<a href="test1?data1=111&data2=222">test1</a><br>');
            res.write('<a href="test2?data1=222&data2=333">test2</a><br>');
            break;
        case "/test1":
            res.write('<h1>test1 입니다.</h1>');
            res.write('<h1>data 1 : ' + q.query.data1 + q.query.data2 + '</h1>');
            break;
        case "/test2":
            res.write('<h1>test2 입니다.</h1>');
            res.write('<h1>data 2 : ' + q.query.data1 + q.query.data2 + '</h1>');
            break;
    }

    res.write('</body>');
    res.write('</html>');

    res.end();

});

server.listen(1234);
console.log('서버 가동');