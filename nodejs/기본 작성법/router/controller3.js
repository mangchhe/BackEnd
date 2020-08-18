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
}