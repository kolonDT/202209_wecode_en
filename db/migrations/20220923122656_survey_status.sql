-- migrate:up

CREATE TABLE
    survey_status(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(10)
    ) -- migrate:down