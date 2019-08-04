var mongoose = require('mongoose');
var QuizWidgetSchema = require('./quiz-widget.schema.server.js')

module.exports = mongoose.model('QuizWidgetModel', QuizWidgetSchema)