var mongoose = require('mongoose');

var Todo = mongoose.Schema({
  title      : String,
  category   : String,
  dueDate    : Date,
  isComplete : {type: Boolean, default: false},
  createdAt  : {type: Date, default: Date.now}
});

mongoose.model('Todo', Todo);
