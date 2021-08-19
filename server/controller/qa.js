var models = require('../model');

module.exports = {

  // requires parameters
  // product_id
  // page
  // count
  getQuestions: function(req, res) {
    let productId = req.params.product_id;
    console.log('pid', productId);
    let page = 1 || req.body.page;
    let counter = 5 || req.body.counter;
    models.qa.getQuestions(productId, page, counter, (err, results) => {
      if (err) {
        res.send(err);
      }
      res.send(results);
    });
  },

  getAnswers: function(req, res) {
    let questionId = req.params.question_id;
    let page = 1 || req.body.page;
    let counter = 5 || req.body.counter;
    models.qa.getAnswers(questionId, page, counter, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    })
  },

  postQuestion: function(req, res) {
    let data = req.body;
    models.qa.postQuestion(data, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    })

  },

  postAnswer: function(req, res) {
    let questionId = req.params.question_id;
    let data = req.body;
    models.qa.postAnswer(questionId, data, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    });
  },

  markQuestionHelpful: function(req, res) {
    let questionId = req.params.question_id;
    models.qa.markQuestionHelpful(questionId, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    });
  },

  reportQuestion: function(req, res) {
    let questionId = req.params.question_id;
    models.qa.reportQuestion(questionId, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    });

  },

  markAnswerHelpful: function(req, res) {
    let answer_id = req.params.answer_id;
    models.qa.markAnswerHelpful(answer_id, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    });
  },

  reportAnswer: function(req, res) {
    let answer_id = req.params.answer_id;
    models.qa.reportAnswer(answer_id, (err, result) => {
      if (err) { res.send(err); }
      res.send(result);
    });
  }
};