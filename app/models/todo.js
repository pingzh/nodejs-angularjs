var mongoose = require("./baseModel")

var Todo = mongoose.model('Todo', {
  text : String
});

module.exports = mongoose.model('Todo', Todo);
