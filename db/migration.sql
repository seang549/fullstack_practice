DROP TABLE IF EXISTS fs_table;

CREATE TABLE fs_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);


INSERT INTO fs_table (name) VALUES ('garett'), ('sean');