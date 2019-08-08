var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');

var studentModel = require('../models/student.model.server');
var questionModel = require('../models/question.model.server');
var answerModel = require('../models/answer.model.server');
var quizWidgetModel = require('../models/quiz-widget.model.server')

function createStudent(student) {
	studentModel.create(student)
	return studentModel.find()
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
	questionModel.create(question)
	return questionModel.find();
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
	answerModel.create(answer);
	return answerModel.find();
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

function createQuizWidget(quizWidget){
	return quizWidgetModel.create(quizWidget)
}

function removeAllQuizWidgets(){
	return quizWidgetModel.deleteMany({}).exec()
}

function populateDatabase(){

for(let i=0; i<students.length; i++){
	studentModel.create(students[i])
}
for(let i=0; i<questions.length; i++){
	questionModel.create(questions[i])
}
for(let i=0; i<answers.length; i++){
	answerModel.create(answers[i])
}
}

function truncateDatabase(){
studentModel.remove().exec()
questionModel.remove().exec()
answerModel.remove().exec()
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
	findAnswersByQidSid,
	createQuizWidget,
	removeAllQuizWidgets,
	populateDatabase,
	truncateDatabase
};