var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/', function (req, res) {

        res.render('index2.ejs');
    });

    app.get('/parameter', function (req, res) {
        var rendered_data = {
            data1: req.query.data1,
            data2: req.query.data2
        }
        res.render('parameter.ejs', rendered_data)
    });

    app.post('/parameter', urlencodeParser, function (req, res) {
        var rendered_data = {
            data1: req.body.data1,
            data2: req.body.data2
        }
        res.render('parameter.ejs', rendered_data);
    });

    app.get('/save_cookie', function (req, res) {
        var op = {
            maxAge: 365 * 24 * 60 * 60
        };
        res.cookie('cookie1', 'aaaa', op);
        res.render('save_cookie.ejs');
    });

    app.get('/load_cookie', function (req, res) {
        var rendered_data = {
            cookie1: req.cookies.cookie1
        }
        res.render('load_cookie.ejs', rendered_data);
    });

    app.get('/save_session', function (req, res) {
        req.session.data1 = 100;
        req.session.data2 = '안녕하세요';
        res.render('save_session.ejs');
    });

    app.get('/load_session', function (req, res) {
        var rendered_data = {
            data1: req.session.data1,
            data2: req.session.data2
        };
        res.render('load_session.ejs', rendered_data);
    });
};