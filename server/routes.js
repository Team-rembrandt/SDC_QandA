var controller = require('./controller');
var router = require('express').Router();

// FOR Q & A API
router.get('/questions', controller.qa.getQuestions);
router.get('/questions/:question_id/answers', controller.qa.getAnswers);

router.post('/questions', controller.qa.postQuestion);
router.post('/questions/:question_id/answers', controller.qa.postAnswer);

router.patch('/questions/:question_id/helpful', controller.qa.markQuestionHelpful);
router.patch('/questions/:question_id/report', controller.qa.reportQuestion);

router.patch('/answers/:answer_id/helpful', controller.qa.markAnswerHelpful);
router.patch('/answers/:answer_id/report', controller.qa.reportAnswer);

module.exports = router;