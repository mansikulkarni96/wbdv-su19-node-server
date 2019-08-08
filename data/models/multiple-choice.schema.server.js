const mongoose = require('mongoose')
module.exports = mongoose.Schema({
	 _id:Number,
	correct: Number,
	choices: Array
})