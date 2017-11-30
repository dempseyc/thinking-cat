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

INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Crodiperone@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Crodiperone','nostory','1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Bimpapomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Bimpapomid','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Iponamede@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Iponamede','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Shucleviff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Shucleviff','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smerzipovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smerzipovrese','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smermenosoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smermenosoby','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smercleftine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smercleftine','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Chiponom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Chiponom','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dibevosomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dibevosomid','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebepovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebepovrese','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Shumenosamede@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Shumenosamede','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inbepidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inbepidus','nostory','1,2,1,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Shuovtine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Shuovtine','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merclefomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merclefomid','nostory','1,2,1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inbrofom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inbrofom','nostory','1,3,1,2,1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ipovomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ipovomid','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Azbrofidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Azbrofidus','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perbevosidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perbevosidus','nostory','1,3,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Inbepefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Inbepefraime','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Kraclodomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Kraclodomid','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moclefidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moclefidus','nostory','1,2,1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Crosepefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Crosepefraime','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quazipoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quazipoclese','nostory','1,2,1,3,4,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flimclevenese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flimclevenese','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Crozipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Crozipomid','nostory','1,2,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flodinerope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flodinerope','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Percleverope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Percleverope','nostory','1,2,1,3,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quadinoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quadinoclese','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dretipinom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dretipinom','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ginmenosoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ginmenosoby','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dretraperope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dretraperope','nostory','1,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ginbupefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ginbupefraime','nostory','1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Pertrapom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Pertrapom','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Jeclodoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Jeclodoclese','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Shubevoserope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Shubevoserope','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Suspapomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Suspapomid','nostory','1,3,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flimtraperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flimtraperat','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Intrapomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Intrapomid','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nindinenese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nindinenese','nostory','1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Kradinomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Kradinomid','nostory','1,3,4,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dretrapiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dretrapiff','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebupinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebupinac','nostory','1,2,1,2,1,3,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mertraperope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mertraperope','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merbeptine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merbeptine','nostory','1,2,1,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Azdiniff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Azdiniff','nostory','1,2,1,3,4,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quaclefinom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quaclefinom','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ditipamede@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ditipamede','nostory','1,2,1,3,4,3,1,2,1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninpapoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninpapoby','nostory','1,2,1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dredipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dredipomid','nostory','1,2,1,3,1,3,1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smermenosidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smermenosidus','nostory','1,3,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Moonom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Moonom','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Krazipoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Krazipoclese','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flopapoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flopapoclese','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merbupinom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merbupinom','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Insepom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Insepom','nostory','1,2,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nincliperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nincliperat','nostory','1,2,1,3,4,3,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perovom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perovom','nostory','1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quabepiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quabepiff','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Destipomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Destipomid','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desbevosinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desbevosinac','nostory','1,3,4,3,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Azcliptine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Azcliptine','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Jepapoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Jepapoclese','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flimmenosovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flimmenosovrese','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merclefovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merclefovrese','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Chiponovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Chiponovrese','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreclefidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreclefidus','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Gincleviff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Gincleviff','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ipsepomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ipsepomid','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Nintrapefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Nintrapefraime','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Dreclevoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Dreclevoclese','nostory','1,2,1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perbroferat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perbroferat','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flosepomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flosepomid','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Susbepom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Susbepom','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Desbeperope@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Desbeperope','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Perclevinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Perclevinac','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Bimpaperat@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Bimpaperat','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebevosoclese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebevosoclese','nostory','1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Merbepinom@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Merbepinom','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Turpapoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Turpapoby','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Cropapefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Cropapefraime','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smerpapenese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smerpapenese','nostory','1,3,1,2,1,3,4,5,4,3,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Quabrofefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Quabrofefraime','nostory','1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mersepinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mersepinac','nostory','1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Gindipovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Gindipovrese','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Indintine@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Indintine','nostory','1,2,1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Floonidus@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Floonidus','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ninpapenese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ninpapenese','nostory','1,2,1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smerdinomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smerdinomid','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Bimclipovrese@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Bimclipovrese','nostory','1,3,4,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Mertrapefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Mertrapefraime','nostory','1,2,1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Drebupefraime@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Drebupefraime','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Flomenosoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Flomenosoby','nostory','1,2,1,3,1,2,1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Kramenosiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Kramenosiff','nostory','1,2,1,3,4,5,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Shubepiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Shubepiff','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Smerclefinac@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Smerclefinac','nostory','1,3,4,6');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Gindinerone@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Gindinerone','nostory','1,2,1,2,1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ginbepomid@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ginbepomid','nostory','1,3,4,5,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Turbepiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Turbepiff','nostory','1,3,4,5,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ginbrofoby@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ginbrofoby','nostory','1,3,4,7');
INSERT INTO cats(email,password_digest,catname,story,data) VALUES ('Ginclefiff@virtualcats.com','$2a$10$PHs62.ErSLxUnp9hoT6PBevG7EYE1anNXBZqpwb3aaMQpw2Z0t1D','Ginclefiff','nostory','1,2,1,3,4,5,7');
