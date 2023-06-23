\c fsdb

DROP TABLE IF EXISTS fstb;

CREATE TABLE fstb (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO fstb (name) VALUES ('blender'), ('vortex');