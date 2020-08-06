/* 
작성일 : 20/08/06
워커에 메모리를 적제해야하는 시간이 걸려 균일하게 시작되지 못하는 문제점이 있었지만 현재 버젼에서는
라운드 로빈이라는 방식으로 각각의 스케쥴을 관리하기때문에 직접 병렬처리를 보장할 수 있다.
라운드 로빈 : 시분할 시스템을 위해 설계된 선점형 스케줄링, 프로세스들 사이에 우선순위를 두지 않고, 순서대로 시간단위로 CPU를 할당하는 방식
선점형 스케줄링 : 하나의 프로세스가 CPU를 할당 받아 실행하고 있을 때 우선 순위가 높은 다른 프로세스가 CPU를 강제로 빼앗아 사용할 수 있는 기법
비선점 : 일괄처리 시스템에 적합하고 CPU 사용 시간이 짧은 여러 프로세스를 오랫동안 대기시킬 수 있으며, 처리율이 떨어질 수 있다는 단점
*/

var cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// Round Robin 방식으로 스케줄링
cluster.schedulingPolicy = cluster.SCHED_RR;
/* 
if (cluster.isMaster == true) {

    cluster.fork();
    cluster.fork();
    cluster.fork();

    cluster.on('online', function (worker) {
        for (var i = 0; i < 1; i++) {
            console.log(worker.process.pid, '동작');
        }
    });
}
*/

var p = new Array();

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        console.log(i + 1 + 'worker process create');
        p.push(cluster.fork());
    }

    for (var i in p) {
        p[i].send('hello World!');
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ${worker.process.pid} died');
        cluster.fork();
    })
}

else {

    process.on('message', function (msg) {
        console.log(msg);
        process.send(msg);
    });

    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('hellowWorld');
    }).listen(8000, function () {
        console.log('slave server' + cluster.worker.process.pid);
    });
}