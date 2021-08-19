const axios = require('axios');
const db = require('../db').db;
const moment = require('moment');

module.exports = {
  getQuestions: function(product_id, page, count, cb) {
    db.query(`
    SELECT product_id, json_agg(
      json_build_object(
        'question_id', questions.id,
        'question_body', questions.body,
        'question_date', to_timestamp(questions.date_written / 1000),
        'asker_name', questions.asker_name,
        'question_helpfulness', questions.helpful,
        'reported', questions.reported,
        'answers', (SELECT answers FROM (
          SELECT json_object_agg(
            answers.id, json_build_object(
              'id', answers.id,
              'body', answers.body,
              'date', to_timestamp(answers.date_written / 1000),
              'answerer_name', answers.answerer_name,
              'helpfulness', answers.helpful,
              'photos', (
                SELECT json_agg(
                  json_build_object(
                    'url', answer_photos.photo_url
                  )
                ) FROM answer_photos WHERE answer_photos.answer_id = answers.id
              )
            )
          ) AS answers
          FROM answers WHERE answers.question_id = questions.id
        ) AS answers)
      )
    ) as results
    FROM questions WHERE questions.product_id = ${product_id} AND questions.reported = 'f' GROUP BY questions.product_id;
    `)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  getAnswers: function(question_id, page, counter, cb) {
    db.query(`
      SELECT json_build_object(
          'question', ${question_id},
          'page', ${page},
          'count', ${counter},
          'results', json_agg(
            json_build_object(
              'answer_id', answers.id,
              'body', answers.body,
              'date', to_timestamp(answers.date_written / 1000),
              'answerer_name', answers.answerer_name,
              'helpfulness', answers.helpful,
              'photos', (
                SELECT
                  json_agg(answer_photos.photo_url)
                FROM answer_photos WHERE answer_photos.answer_id = answers.id
              )
            )
          )
        )
      FROM answers WHERE answers.question_id = ${question_id} AND answers.reported = 'f' GROUP BY answers.question_id;`
    )
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        console.log(err);
        cb (err, null);
      })
  },

  postQuestion: function(dataBody, cb) {
    let textBody = dataBody.body;
    let name = dataBody.name;
    let email = dataBody.email;
    let product_id = dataBody.product_id;
    let date = Date.now();

    db.query(`INSERT INTO questions (product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES (${product_id}, '${textBody}', ${date}, '${name}', '${email}', 0, 0);`)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  postAnswer: function(question_id, dataBody, cb) {
    let textBody = dataBody.body;
    let name = dataBody.name;
    let email = dataBody.email;
    let photos = dataBody.photos;
    let date = Date.now();

    db.query(`INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email, reported, helpful) VALUES (${question_id}, '${textBody}', ${date}, '${name}', '${email}', 0, 0) RETURNING id;`)
      .then((data) => {
        db.query(`INSERT INTO answer_photos (answer_id, photo_url) VALUES (${data[0].id}, '${photos}');`)
          .then((data) => {
            cb(null, data);
          })
          .catch((err) => {
            cb(err, null);
          });
      })
      .catch((err) => {
        cb(err, null);
      });

  },

  markQuestionHelpful: function(question_id, cb) {
    db.query(`UPDATE questions SET helpful = helpful + 1 WHERE questions.id = ${question_id}`)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  reportQuestion: function(question_id, cb) {
    db.query(`UPDATE questions SET reported = 1 WHERE questions.id = ${question_id};`)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  markAnswerHelpful: function(answer_id, cb) {
    db.query(`UPDATE answers SET helpful = helpful + 1 WHERE answers.id = ${answer_id};`)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  },

  reportAnswer: function(answer_id, cb) {
    db.query(`UPDATE answers SET reported = 1 WHERE answers.id = ${answer_id};`)
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      });
  }
};
