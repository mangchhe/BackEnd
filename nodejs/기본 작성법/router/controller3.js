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
}