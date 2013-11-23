var express = require('express');
var path = require('path');
var less = require('express-less');

exports.initialize = function(app, RedisStore){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/less', less(__dirname + '/less', { compress: true }));
  app.use(express.cookieParser());
  app.use(express.session({
    store : new RedisStore({host: 'localhost', port: 6379}),
    secret: 'change-this-to-a-super-secret-message',
    cookie: { maxAge: 60 * 60 * 1000 }
  }));

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:9000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });

  app.use(app.router);

  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }
};
