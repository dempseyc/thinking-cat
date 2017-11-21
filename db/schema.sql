DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
  catname VARCHAR(50),
  story TEXT,
  data VARCHAR(250)
);

-- INSERT INTO cats(email,password_digest,catname,story,data)
-- VALUES ('test1@nologin.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','cat1','nostory','[1,3,4,5,7]');

INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quaclodtine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quaclodtine','nostory','1,2,1,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inclipidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inclipidus','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreonoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreonoclese','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninclipoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninclipoby','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asclefoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asclefoby','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susdinerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susdinerat','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclipinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclipinac','nostory','1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nindipoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nindipoby','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclodidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclodidus','nostory','1,3,4,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Indipovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Indipovres','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Percloderat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Percloderat','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merbroferat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merbroferat','nostory','1,2,1,3,4,3,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclevomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclevomid','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merdinovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merdinovres','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asclevtine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asclevtine','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Peronenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Peronenes','nostory','1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moonerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moonerat','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dionoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dionoby','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perclodom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perclodom','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreoverat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreoverat','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desdinovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desdinovres','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Didipovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Didipovres','nostory','1,3,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreclodomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreclodomid','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebevosom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebevosom','nostory','1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susbrofoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susbrofoclese','nostory','1,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Assepom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Assepom','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moovenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moovenes','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perdipenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perdipenes','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Momenosoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Momenosoby','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Didipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Didipomid','nostory','1,3,4,5,4,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninontine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninontine','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Momenosinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Momenosinac','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dredinoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dredinoby','nostory','1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dibrofomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dibrofomid','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninonerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninonerat','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inbevosovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inbevosovres','nostory','1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inbrofoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inbrofoclese','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mermenosomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mermenosomid','nostory','1,2,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perclipom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perclipom','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inclipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inclipomid','nostory','1,2,1,3,4,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asdinerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asdinerat','nostory','1,3,1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclevtine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclevtine','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perclodovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perclodovres','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebevosidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebevosidus','nostory','1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asoninac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asoninac','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Sussepoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Sussepoby','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dresepinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dresepinac','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merdiperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merdiperat','nostory','1,2,1,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asonom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asonom','nostory','1,3,1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Persepomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Persepomid','nostory','1,3,4,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asbevosoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asbevosoby','nostory','1,2,1,3,4,3,1,2,1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclipinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclipinac','nostory','1,2,1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Modipom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Modipom','nostory','1,2,1,3,4,3,4,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asovoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asovoby','nostory','1,2,1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susdipoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susdipoby','nostory','1,2,1,2,1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merdipoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merdipoclese','nostory','1,3,4,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desclipoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desclipoby','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mobevostine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mobevostine','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dionoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dionoby','nostory','1,2,1,3,4,5,4,3,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perovomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perovomid','nostory','1,2,1,2,1,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Sussepoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Sussepoby','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninclevomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninclevomid','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merclevomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merclevomid','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreclevenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreclevenes','nostory','1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninclodidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninclodidus','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nincliperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nincliperat','nostory','1,3,4,5,4,3,1,2,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asdipidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asdipidus','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asbevosidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asbevosidus','nostory','1,2,1,3,4,3,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quaclefenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quaclefenes','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dionerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dionerat','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susclevinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susclevinac','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quaclefoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quaclefoby','nostory','1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Indininac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Indininac','nostory','1,2,1,3,4,5,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Incliperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Incliperat','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inclipoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inclipoclese','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asmenosenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asmenosenes','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mosepoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mosepoclese','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perovoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perovoby','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inovoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inovoclese','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inovoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inovoclese','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreoninac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreoninac','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quaclipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quaclipomid','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Momenosinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Momenosinac','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perdinomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perdinomid','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merovtine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merovtine','nostory','1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nindinom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nindinom','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merdinerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merdinerat','nostory','1,2,1,3,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susbrofoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susbrofoby','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Incleferat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Incleferat','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreovovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreovovres','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perontine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perontine','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desbevosovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desbevosovres','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perdinenes@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perdinenes','nostory','1,2,1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Asovoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Asovoby','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inclevovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inclevovres','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Meronerat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Meronerat','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Diclodomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Diclodomid','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quadipovres@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quadipovres','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreoverat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreoverat','nostory','1,2,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desdinomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desdinomid','nostory','1,2,1,3,4,6');
