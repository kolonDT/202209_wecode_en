-- migrate:up

CREATE TABLE
    images (
        id INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        img LONGBLOB NOT NULL,
        form_id INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (form_id) REFERENCES form (id)
    ) -- migrate:down