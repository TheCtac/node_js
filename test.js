/* NodeJS uses CommonJS, thatswhy necessary to use babel lib
    run  npm init -y to create package.JSON
    run npm install babel-cli babel-core babel-preset-es2015 --save-dev
        to install tree babel packegs
     run npm install to install all needed modules wroted in packege.json
     set directory srtucture
    add to packege.json scripts list value
        "build" : "babel in_ES6 -d out_CommonJS --presets es2015"

ctrl + c - stop program
*/

var http = require('http');
var func_ = require('./myFunctions');
var events = require('events')
var url = require('url');
var fs = require('fs')

var myEmit = new events.EventEmitter();
myEmit.on('someEvent', function(text) {
    //console.log(text);
});

// імітуєм створення події
myEmit.emit('someEvent', func_.getToday());

var url_ = "https://ru.aliexpress.com/item/KINGSEVEN-2018-HD/32850720771.html?spm=firedeals.home.products-list-accessories.4.32ee2817SLm9QI&pvid=ab942bf0-807b-4ac5-93cb-ce7c281a7e4e&gps-id=5310016&scm=1007.14831.114205.0&scm-url=1007.14831.114205.0&scm_id=1007.14831.114205.0"
var q = url.parse(url_, true).query;

//var html_ = fs.readFileSync('index.html');

var server = http.createServer(function (req, res) {
    console.log("current url : " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'title': 'Test'});
    if (req.url === '/' || req.url === '/tanks') {
        fs.createReadStream(__dirname + '/html/index.html', 'utf8').pipe(res);
    //res.write("The current date is :" + dt.myDate());
    //res.write(html_);
  } else{
        fs.createReadStream(__dirname + '/html/notfound.html', 'utf8').pipe(res);
    }
});
server.listen(8000, '127.0.0.1');
