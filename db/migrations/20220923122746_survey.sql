-- migrate:up

CREATE TABLE
    survey (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        survey_url VARCHAR(300) NULL,
        statistics VARCHAR(1000) NULL,
        start_date DATETIME NULL,
        end_date DATETIME NULL,
        anonymous_allow BOOLEAN NULL,
        duplication_allow BOOLEAN NULL,
        landing_url VARCHAR(300) NULL,
        admin_id INT NOT NULL,
        form_id INT NOT NULL,
        survey_status_id INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (admin_id) REFERENCES admin (id),
        FOREIGN KEY (form_id) REFERENCES form (id),
        FOREIGN KEY (survey_status_id) REFERENCES survey_status (id)
    ) -- migrate:down