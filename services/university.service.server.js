var universityDao = require('../daos/university.dao.server.js')

module.exports = function (app) {

	console.log('student service server')

	function createStudent(req, res) {
		var student = req.body
		console.log(student)
		universityDao
			.createStudent(student)
			.then(response => res.send(response))
	}

	function findAllStudents(req, res) {
		console.log('findAllStudents')
		universityDao
			.findAllStudents()
			.then(students => res.send(students))
	}

	function findStudentById(req, res) {
		var studentId = req.params['sid'];
		universityDao
			.findStudentById(studentId)
			.then(student => res.json(student))
	}

	function findStudentByUsername(req, res) {
		var username = req.params['username'];
		universityDao
			.findStudentByUsername(username)
			.then(student => res.json(student))
	}

	function updateStudent(req, res) {
		var studentId = req.params['sid'];
		var studentUpdates = req.body
		universityDao
			.updateStudent(studentId, studentUpdates)
			.then(status => res.json(status))
	}

	function deleteStudent(req, res) {
		var studentId = req.params['sid'];
		universityDao
			.deleteStudent(studentId)
			.then(status => res.json(status))
	}

	function createQuestion(req, res) {
		var question = req.body;
		universityDao
			.createQuestion(question)
			.then(response => res.send(response))
	}

	function deleteQuestion(req, res) {
		var qid = req.params['qid'];
		universityDao
			.deleteQuestion(qid)
			.then(status => res.json(status))
	}

	function findAllQuestions(req, res) {
		universityDao
			.findAllQuestions()
			.then(questions => res.send(questions))
	}

	function findQuestionById(req, res) {
		universityDao
			.findQuestionById(req.params['qid'])
			.then(question => res.json(question))
	}

	function updateQuestion(req, res) {
		var qid = req.params['qid'];
		var question = req.body;
		universityDao
			.updateQuestion(qid, question)
			.then(status => res.json(status))
	}

	function createAnswer(req, res){
		var answer = req.body;
		universityDao.createAnswer(req.params['sid'],req.params['qid'],answer).then(response=> res.json(response))
	}

	function findAllAnswers(req, res) {
		universityDao
			.findAllAnswers()
			.then(answers => res.send(answers))
	}

	function findAnswerById(req, res) {
		universityDao
			.findAnswerById(req.params['aid'])
			.then(answer => res.json(answer))	
	}

	function findAnswersByStudent(req, res){
		universityDao
			.findAnswersByStudent(req.params['sid'])
			.then(answer => res.json(answer))
	}

	function findAnswersByQuestion(req, res){
		universityDao
			.findAnswersByQuestion(req.params['qid'])
			.then(answer => res.json(answer))
	}

	function findAnswersByQidSid(req, res){
		universityDao
			.findAnswersByQidSid(req.params['sid'],req.params['qid'])
			.then(answer => res.json(answer))
	}

	function populateDatabase(){
		universityDao
			.populateDatabase()
	}

	function truncateDatabase(){
		universityDao
			.truncateDatabase()
	}

	app.post("/api/student", createStudent);
	app.delete("/api/student/:sid", deleteStudent);
	app.get("/api/student", findAllStudents);
	app.get("/api/student/:sid", findStudentById);
	app.put("/api/student/:sid", updateStudent);
	app.post("/api/question", createQuestion);
	app.get("/api/question", findAllQuestions);
	app.get("/api/question/:qid", findQuestionById);
	app.put("/api/question/:qid", updateQuestion);
	app.delete("/api/question/:qid", deleteQuestion);
	app.post("/api/student/:sid/question/:qid/answer",createAnswer);
	app.get("/api/answer", findAllAnswers);
	app.get("/api/answer/:aid", findAnswerById);
	app.get("/api/student/:sid/answer", findAnswersByStudent);
	app.get("/api/question/:qid/answer", findAnswersByQuestion);
	app.get("/api/student/:sid/question/:qid/answer", findAnswersByQidSid)
	app.get("/api/question/:qid/student/:sid/answer", findAnswersByQidSid)
	app.get("/api/all", truncateDatabase)
	app.get("/api/populate", populateDatabase)
}