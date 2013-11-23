var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.index = function(req, res){
  Todo.find(function(err, todos){
    res.send(todos);
  });
};

exports.create = function(req, res){
  new Todo(req.body).save(function(err, todo){
    res.send(todo);
  });
};

exports.complete = function(req, res){
  Todo.findById(req.params.id, function(err, todo){
    todo.isComplete = !todo.isComplete;
    todo.save(function(err, todo){
      res.send(todo);
    });
  });
};

exports.destroy = function(req, res){
  Todo.findByIdAndRemove(req.params.id, function(err, todo){
    res.send(todo);
  });
};
