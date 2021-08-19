COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
FROM '/Users/jinhoobong/Desktop/HackReactor_SEI/sdc/data/questions.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX ON questions (product_id, id, reported);

COPY answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
FROM '/Users/jinhoobong/Desktop/HackReactor_SEI/sdc/data/answers.csv'
DELIMITER ','
CSV HEADER;
CREATE INDEX ON answers (question_id, id, reported);

COPY answer_photos(id, answer_id, photo_url)
FROM '/Users/jinhoobong/Desktop/HackReactor_SEI/sdc/data/answers_photos.csv'
DELIMITER ','
CSV HEADER;
CREATE INDEX ON answer_photos (answer_id);