//Set up mongoose db

var mongoose = require('mongoose');
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

module.exports = mongoose
