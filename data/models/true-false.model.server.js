var mongoose = require('mongoose');
var TrueFalseSchema = require('./true-false.schema.server.js')

module.exports = mongoose.model('TrueFalseModel', TrueFalseSchema)