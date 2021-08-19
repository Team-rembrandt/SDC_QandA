CREATE TABLE questions (
  id SERIAL,
  product_id INTEGER,
  body TEXT,
  date_written BIGINT,
  asker_name TEXT,
  asker_email TEXT,
  reported INTEGER,
  helpful INTEGER
);

ALTER TABLE questions ALTER reported TYPE boolean USING CASE WHEN reported = 0 THEN FALSE ELSE TRUE END;

CREATE TABLE answers (
  id SERIAL,
  question_id INTEGER,
  body TEXT,
  date_written BIGINT,
  answerer_name TEXT,
  answerer_email TEXT,
  reported INTEGER,
  helpful INTEGER
);

ALTER TABLE answers ALTER reported TYPE boolean USING CASE WHEN reported = 0 THEN FALSE ELSE TRUE END;

CREATE TABLE answer_photos (
  id SERIAL,
  answer_id INTEGER,
  photo_url TEXT
);