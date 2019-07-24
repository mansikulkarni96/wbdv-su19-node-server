var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
function createStudent(student) {
	students.push(student);
	return students;
}
function deleteStudent(sid) {
	var index = students.findIndex(student => student._id == sid)
	students.splice(index, 1)
	return students;
}
function findAllStudents() {
	return students;
}
function findStudentById(sid) {
	return students.find(student => student._id == sid)
}
function updateStudent(sid, student) {
	var index = students.findIndex(stud => stud._id === sid)
	students[index] = student
	return students;
}
function createQuestion(question) {
	questions.push(question);
	return questions;
}
function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}
function deleteQuestion(qid) {
	var index = questions.findIndex(question => question._id == qid)
	questions.splice(index, 1)
	return questions;
}
function updateQuestion(qid, question) {
	var index = questions.findIndex(quest => quest._id === qid)
	questions[index] = question
	return questions;
}
function createAnswer(sid, qid, answer){
	answer['student'] = sid
	answer['question'] = qid
	answers.push(answer);
	return answers;
}
function findAllAnswers() {
	return answers;
}
function findAnswerById(aid) {
	return answers.find(answer => answer._id == aid)
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
	findAnswerById
};