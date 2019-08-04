const mongoose = require('mongoose')
module.exports = mongoose.Schema({
	correct: Number,
	choices: String
})