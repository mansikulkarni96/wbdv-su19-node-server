var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');

var studentModel = require('../models/student.model.server');
var questionModel = require('../models/question.model.server');
var answerModel = require('../models/answer.model.server');

function createStudent(student) {
	return studentModel.create(student)
}

function findAllStudents() {
	// retrieve all student docs
	// equivalent to select * from students -- no where clause
	return studentModel.find()
}

function findStudentById(studentId) {
	// studentModel.find({_id: userId})
	// equivalent select * from students where _id=studentId
	// return studentModel.find({_id: studentId})
	return studentModel.findById(studentId)
}

function findStudentByUsername(username) {
	// return studentModel.find({username: username})
	return studentModel.findOne({username: username})
}

function updateStudent(studentId, studentUpdates) {
	return studentModel.update(
		{_id: studentId},
		{$set: studentUpdates}
	)
}

function deleteStudent(studentId) {
	return studentModel.remove({_id: studentId})
}

function createQuestion(question) {
	return questionModel.create(question)
}

function findAllQuestions() {
	return questionModel.find();
}
function findQuestionById(qid) {
	return questionModel.findById(qid)
}
function deleteQuestion(qid) {
	return questionModel.remove({_id: qid})
}

function updateQuestion(qid, question) {
	return questionModel.update(
		{_id: qid},
		{$set: question}
	)
}

function createAnswer(sid, qid, answer){
	answer['student'] = sid
	answer['question'] = qid
	return answerModel.create(answer);
}

function findAllAnswers() {
	return answerModel.find()
}

function findAnswerById(aid) {
	return answerModel.findById(aid)
}

function findAnswersByStudent(sid){
	return answerModel.find({student: sid})
}

function findAnswersByQuestion(qid){
	return answerModel.find({question: qid})
}

function findAnswersByQidSid(sid, qid){
	return answerModel.find({student: sid, question: qid})
}

module.exports = {
	createStudent,
	deleteStudent,
	findAllStudents,
	findStudentById,
	updateStudent,
	createQuestion,
	findAllQuestions,
	findQuestionById,
	deleteQuestion,
	updateQuestion,
	createAnswer,
	findAllAnswers,
	findAnswerById,
	findAnswersByStudent,
	findAnswersByQuestion,
	findAnswersByQidSid
};