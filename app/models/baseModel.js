//Set up mongoose db

var mongoose = require("mongoose");
// mongoose.connect("mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu");
var db = mongoose.connection
db.on("error", console.error);
db.once("open", function() {
  console.log("hi");
});

mongoose.connect("mongodb://localhost/test");
module.exports = mongoose
