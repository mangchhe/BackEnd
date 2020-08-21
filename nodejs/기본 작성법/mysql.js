var mysql = require('mysql');

var conn_info = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gkgk156',
    database: 'TestDB'
};

var conn = mysql.createConnection(conn_info);

conn.connect(function (error) {
    if (error) {
        console.log('접속 에러');
    }
    else {
        console.log('접속 성공');

        var sql = 'insert into TestTable (int_data, str_data) values (?, ?)'

        /* var input_data1 = [100, '문자열1'];
        conn.query(sql, input_data1, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('저장완료1');
            }
        });

        var input_data2 = [200, '문자열2'];
        conn.query(sql, input_data2, function (error) {
            console.log('저장완료2');
        })

        var input_data3 = [300, '문자열3'];
        conn.query(sql, input_data3, function (error) {
            console.log('저장완료3');
        }) */

        var sql2 = 'select int_data, str_data from TestTable';
        conn.query(sql2, function (error, rows) {
            for (var obj of rows) {
                console.log('int_data :', obj.int_data);
                console.log('str_data :', obj.str_data);
            }
        });

        var sql3 = 'update TestTable set str_data=? where int_data=?';

        var update_data = ['문자열100', 100];
        conn.query(sql3, update_data, function (error) {
            console.log('수정완료');
        })

        var sql4 = 'delete from TestTable where int_data=?';

        var delete_data = [100];
        conn.query(sql4, delete_data, function (error) {
            console.log('삭제완료');
        });

        conn.end();
    }
});

