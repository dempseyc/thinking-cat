DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
  catname VARCHAR(50),
  story TEXT,
  data VARCHAR(250)
);

INSERT INTO cats(email,password_digest,catname,story,data)
VALUES ('test1@nologin.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','cat1','nostory','[1,3,4,5,7]');
