var mongoose = require('mongoose');
var MultipleChoiceSchema = require('./multiple-choice.schema.server.js')

module.exports = mongoose.model('MultipleChoiceModel', MultipleChoiceSchema)