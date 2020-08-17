/* 
작성일 : 20/08/13
라우팅 : 최적의 경로를 찾아주는 것(길잡이 역할), 알맞는 주소로 연결시켜준다.
랜더링 : 외부 파일의 데이터를 읽어와 html 코드로 만든 다음 클라이언트에게 전달하는 기능
        -> ejs 모듈 사용
*/

var express = require('express');
var app = express();
var controller1 = require('./router/controller1')(app);
var controller2 = require('./router/controller2')(app);
var ejs = require('ejs');

app.set('views', __dirname + '/views');
app.set('view engine', ejs);
app.engine('html', ejs.renderFile);
app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

/* 
app.get('/', function (req, res) {
    res.send('ROOT');
});
app.get('/test1', function (req, res) {
    res.send('TEST1');
});
app.get('/test2', function (req, res) {
    res.send('TEST2');
});
app.get('/test3', function (req, res) {
    res.send('TEST3');
});
 */

var server = app.listen(2000, function () {
    console.log('서버 가동');
});