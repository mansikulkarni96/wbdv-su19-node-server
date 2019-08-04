var mongoose = require('mongoose');
var answerSchema = require('./answer.schema.server.js')

module.exports = mongoose.model('answerModel', answerSchema)