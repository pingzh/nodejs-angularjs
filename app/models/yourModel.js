var mongoose = require("./baseModel")

var yourSchema = new mongoose.Schema({
  title: { type: String },
  rating: String,
  releaseYear: Number,
  hasCreditCookie: Boolean,
  text: String
});


module.exports = mongoose.model("yourModel", yourSchema);
