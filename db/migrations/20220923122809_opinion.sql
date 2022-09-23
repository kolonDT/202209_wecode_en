-- migrate:up

CREATE TABLE
    opinion (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        result VARCHAR(2000) NULL,
        phone VARCHAR(20) NULL,
        agreement BOOLEAN NULL,
        survey_id INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
    ) -- migrate:down