const mongoose = require('mongoose')
const TrueFalseSchema = require('./true-false.schema.server')
const MultipleChoiceSchema = require('./multiple-choice.schema.server')
module.exports = mongoose.Schema({
 _id: Number,
 question: String,
 points: Number,
 type: {type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE"]},
 isTrue: Boolean,
 correct: Number,
 choices: Array
}, {collection: 'questions'})