-- migrate:up

CREATE TABLE
    form (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        form_data VARCHAR(4000),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
    ) -- migrate:down