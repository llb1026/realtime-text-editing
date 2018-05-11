const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');

// https
let options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

let app = express();
app.set('port', process.env.PORT || 3000);

https.createServer(options, app).listen(app.get('port'), function () {
    console.log('Express started in ' + app.get('env') + ' mode on https://localhost:' + app.get('port') + '/');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', function (req, res) {
    res.render('index', {
        title: '** TEST **'
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// change logging middleware
switch(app.get('env')) {
    // $ export NODE_ENV=development OR $ export NODE_ENV=production

    case 'development':
        app.use(require('morgan')('dev'));
        break;
    // case 'production':
    //     app.use(require('express-logger')({
    //         path: __dirname + '/log/requests.log'
    //     }));
    //     break;
}

module.exports = app;