DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
  catname VARCHAR(50),
  story TEXT,
  data VARCHAR(250)
);
