var mongoose = require('mongoose');
var questionSchema = require('./question.schema.server.js')

var questionModel =
	mongoose.model(
		'QuestionModel',
		questionSchema);

module.exports = questionModel