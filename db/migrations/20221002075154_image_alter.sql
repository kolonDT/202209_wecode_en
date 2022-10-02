-- migrate:up

ALTER TABLE
    koda_test.images MODIFY COLUMN img VARCHAR(200) CHARACTER SET 'utf8mb4' NOT NULL;

-- migrate:down