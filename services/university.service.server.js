module.exports = function(app) {
	var universityDao = require('../daos/university.dao.server.js')

	function createStudent(req, res) {
		var student = req.body;
		res.json(universityDao.createStudent(student))
	}
	function deleteStudent(req, res) {
		var sid = req.params['sid'];
		res.json(universityDao.deleteStudent(sid))
	}
	function findAllStudents(req, res) {
		res.json(universityDao.findAllStudents());
	}
	function findStudentById(req, res) {
		res.json(
			universityDao.findStudentById(req.params['sid'])
		)
	}
	function updateStudent(req, res) {
		var sid = req.params['sid'];
		var student = request.body;
		res.json(universityDao.updateStudent(sid, student))
	}
	function createQuestion(req, res) {
		var question = req.body;
		res.json(universityDao.createQuestion(question))
	}
	function deleteQuestion(req, res) {
		var qid = req.params['qid'];
		res.json(universityDao.deleteQuestion(qid))
	}
	function findAllQuestions(req, res) {
		res.json(universityDao.findAllQuestions());
	}
	function findQuestionById(req, res) {
		res.json(
			universityDao.findQuestionById(req.params['qid'])
		)	
	}
	function updateQuestion(req, res) {
		var qid = req.params['qid'];
		var question = req.body;
		res.json(universityDao.updateQuestion(qid,question))
	}
	function createAnswer(req, res){
		var answer = req.body;
		res.json(universityDao.createAnswer(req.params['sid'],req.params['qid'],answer))
	}
	function findAllAnswers(req, res) {
		res.json(universityDao.findAllAnswers());
	}
	function findAnswerById(req, res) {
		res.json(
			universityDao.findAnswerById(req.params['aid'])
		)	
	}
	app.post("/api/students", createStudent);
	app.delete("/api/students/:sid", deleteStudent);
	app.get("/api/students", findAllStudents);
	app.get("/api/students/:sid", findStudentById);
	app.put("/api/students/:sid", updateStudent);
	app.post("/api/questions", createQuestion);
	app.get("/api/questions", findAllQuestions);
	app.get("/api/questions/:qid", findQuestionById);
	app.put("/api/questions/:qid", updateQuestion);
	app.post("/api/student/:sid/question/:qid/answer",createAnswer);
	app.get("/api/answers", findAllAnswers);
	app.get("/api/answers/:aid", findAnswerById);

}