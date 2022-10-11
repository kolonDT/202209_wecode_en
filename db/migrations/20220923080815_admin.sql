-- migrate:up

CREATE TABLE
    admin (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        admin_id VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
    ) -- migrate:down