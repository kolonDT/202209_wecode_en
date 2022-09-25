-- migrate:up

CREATE TABLE
    survey_status(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(10),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
    ) -- migrate:down