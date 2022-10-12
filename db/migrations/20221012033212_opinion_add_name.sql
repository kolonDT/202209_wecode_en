-- migrate:up

ALTER TABLE opinion ADD COLUMN name2 VARCHAR(20) NULL;

-- migrate:down