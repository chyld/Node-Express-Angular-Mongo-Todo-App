var express = require('express');
var mongoose = require('mongoose');

// model definitions
require('require-dir')('./models');

// route definitions
var home = require('./routes/home');
var todos = require('./routes/todos');

var app = express();
var RedisStore = require('connect-redis')(express);
mongoose.connect('mongodb://localhost/todo-maker');

// configure express
require('./config').initialize(app, RedisStore);

// routes
app.get('/', home.index);
app.post('/todos', todos.create);
app.get('/todos', todos.index);
app.put('/todos/:id/complete', todos.complete);
app.delete('/todos/:id', todos.destroy);

// start server & socket.io
var common = require('./sockets/common');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {log: true, 'log level': 2});
server.listen(app.get('port'));
io.of('/app').on('connection', common.connection);
