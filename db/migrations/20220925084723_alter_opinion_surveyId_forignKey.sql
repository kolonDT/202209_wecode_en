-- migrate:up

ALTER TABLE opinion
ADD
    FOREIGN KEY (survey_id) REFERENCES survey (id) -- migrate:down