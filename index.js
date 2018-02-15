var client = require('cheerio-httpcli');
 
// Googleで「node.js」について検索する。
var word = '';
 
client.fetch('http://www.keyakizaka46.com/s/k46o/diary/member/list?ima=0000&ct=19', { q: word }, function (err, $, res, body) {
  
// レスポンスステータスを参照
  console.log(res.headers.status);
 
  // HTMLタイトルを表示
  console.log($('title').text());

});