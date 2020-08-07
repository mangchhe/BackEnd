/* 
작성일 : 20/08/07
해시 함수 : 단방향 암호화 기술, 암호화는 가능하지만 복호화는 불가능하다.
ex) 웹사이트 가입 등에서 볼 수 있는 모든 정보들, 비밀번호와 같은 것
해시 함수만을 사용하면 보안이 불안정하다(이미 뚫린 이력이 있다.), 그래서 salt(소금)을 쳐서 보안을 높힌다.
salt : 랜덤바이트를 생성하여 임의 소금정보를 생성(모든 패스워드에 같은 소금정보를 이용하게 되면 한번 소금정보를 알아 냈을 때 다른 비밀번호로 쉽게 뚫린다.)
*/

var crypto = require('crypto');

var criphers = crypto.getCiphers();

for (var x of criphers) {
    console.log(x);
}

var key = "test key";
var data = "암호화 할 데이터";

var cipher = crypto.createCipher("aes-256-cbc", key);
var result = cipher.update(data, "utf8", "base64");
result += cipher.final("base64");

console.log("result :", result);

var decipher = crypto.createDecipher("aes-256-cbc", key);
var result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");

console.log('복호화 문자열 : ', result2);