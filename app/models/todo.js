var mongoose = require("./baseModel")

// var Todo = mongoose.model("Todo", {
//   text : String
// });



var todoSchema = new mongoose.Schema({
  title: { type: String },
  rating: String,
  releaseYear: Number,
  hasCreditCookie: Boolean,
  text: String
});


module.exports = mongoose.model("Todo", todoSchema);
