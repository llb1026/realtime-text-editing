var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('http://localhost:' + app.get('port') + '/');
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
    var err = new Error('Not Found');
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

module.exports = app;